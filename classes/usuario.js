class Usuario {
    constructor(id_usuario, nome, email, senha, data_criacao, data_ultima_login, preferencias_idioma) {
      this.id_usuario          = id_usuario;
      this.nome                = nome;
      this.email               = email;
      this.senha               = senha;
      this.data_criacao        = data_criacao;
      this.data_ultima_login   = data_ultima_login;
      this.preferencias_idioma = preferencias_idioma;
    }

    criarConta(nome, email, senha) {}
    login(email, senha) {}
    editarPerfil(nome, email, senha) {}
    deletarConta() {}
    getPerfil() {}
    getHistoricoAtividades() {}
  }