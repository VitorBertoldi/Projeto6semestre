const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://vitorbertoldi:wrtYXEn67mrZT4im@cluster0.ad7ah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err);
});

const usuarioSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

const UsuarioDB = mongoose.model('Usuario', studentSchema);