class Relatorio {
    constructor(idUsuario, tipoRelatorio, dataGeracao ) {
      this.idUsuario = idUsuario;
      this.tipoRelatorio = tipoRelatorio;
      this.dataGeracao = dataGeracao;
    }
  
    gerarRelatorio() {
      throw new Error('Método "gerarRelatorio" deve ser implementado nas subclasses.');
    }
  
    getIdUsuario() {
      return this.idUsuario;
    }
  
    getTipoRelatorio() {
      return this.tipoRelatorio;
    }
  
    getDataGeracao() {
      return this.dataGeracao;
    }
  }
  
  class RelatorioSemanal extends Relatorio {
    gerarRelatorio() {
      console.log('Gerando relatório semanal...');
      // Implementação para gerar relatório semanal
    }
  }
  
  class RelatorioMensal extends Relatorio {
    gerarRelatorio() {
      console.log('Gerando relatório mensal...');
      // Implementação para gerar relatório mensal
    }
  }