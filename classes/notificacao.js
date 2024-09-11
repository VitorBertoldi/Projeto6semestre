class Notificao {
    constructor (id_notificacao, id_usuario, titulo, mensagem, data_envio, status_leitura) {
        this.id_notificacao  = id_notificacao
        this.id_usuario      = id_usuario
        this.titulo          = titulo
        this.mensagem        = mensagem  
        this.data_envio      = data_envio 
        this.status_leitura  = status_leitura   
    }
    
    criarNotificacao(idUsuario, titulo, mensagem, dataEnvio){}
    editarNotificacao(idNotificacao, titulo, mensagem, dataEnvio){}
    excluirNotificacao(idNotificacao){}
    getNotificacao(idNotificacao){}
    getNotificacoes(idUsuario){}

}