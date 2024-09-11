class Configuracao {
    constructor(id_configuracao, id_usuario, tema_interface, unidade_medida_distancia, notificacoes_habilitadas, sincronizacao_dispositivos, compartilhamento_social ) {
        this.id_configuracao            = id_configuracao
        this.id_usuario                 = id_usuario
        this.tema_interface             = tema_interface
        this.unidade_medida_distancia   = unidade_medida_distancia
        this.notificacoes_habilitadas   = notificacoes_habilitadas
        this.sincronizacao_dispositivos = sincronizacao_dispositivos
        this.compartilhamento_social    = compartilhamento_social
    }
    
    criarConfiguracao(idUsuario, temaInterface, unidadeMedidaDistancia,
        notificacoesHabilitadas, sincronizacaoDispositivos, compartilhamentoSocial){}
    editarConfiguracao(idUsuario, temaInterface, unidadeMedidaDistancia,
        notificacoesHabilitadas, sincronizacaoDispositivos, compartilhamentoSocial){}
    getConfiguracao(idUsuario){}
        
}