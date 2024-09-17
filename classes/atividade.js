class Atividade {
    constructor(tipoAtividade, dataAtividade, duracao, distancia, intensidade, caloriasQueimadas, observacoes) {
      this.tipoAtividade     = tipoAtividade;
      this.dataAtividade     = dataAtividade;
      this.duracao           = duracao;
      this.distancia         = distancia;
      this.intensidade       = intensidade;
      this.caloriasQueimadas = caloriasQueimadas;
      this.observacoes       = observacoes;
    }
  
    criarAtividade() {
      throw new Error('Método "criarAtividade" deve ser implementado nas subclasses.');
    }
  
    getTipoAtividade() {
      return this.tipoAtividade;
    }
  
    getDataAtividade() {
      return this.dataAtividade;
    }
  
    getDuracao() {
      return this.duracao;
    }
  
    getDistancia() {
      return this.distancia;
    }
  
    getIntensidade() {
      return this.intensidade;
    }
  
    getCaloriasQueimadas() {
      return this.caloriasQueimadas;
    }
  
    getObservacoes() {
      return this.observacoes;
    }
  }
  
  class Corrida extends Atividade {
    criarAtividade() {
      console.log('Criando atividade de corrida...');
    }
  }
  
  class Ciclismo extends Atividade {
    criarAtividade() {
      console.log('Criando atividade de ciclismo...');
    }
  }