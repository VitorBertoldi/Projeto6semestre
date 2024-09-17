const mongoose = require('mongoose');

class MongoDBConnection {
  constructor() {
    if (!MongoDBConnection.instance) {
      this._connect();
      MongoDBConnection.instance = this;
    }

    return MongoDBConnection.instance;
  }

  _connect() {
    mongoose.connect('mongodb+srv://vitorbertoldi:wrtYXEn67mrZT4im@cluster0.ad7ah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .then(() => {
        console.log('Conectado ao MongoDB');
      })
      .catch(err => {
        console.error('Erro ao conectar ao MongoDB:', err);
      });
  }
}

// Exportar uma instância única da classe
const instance = new MongoDBConnection();
Object.freeze(instance);

module.exports = instance;
