class Meta {
    constructor (id_meta, id_usuario, tipo_atividade, descricao_meta, valor_meta, data_inicial, data_final, status_meta ) {
        this.id_meta        = id_meta;
        this.id_usuario     = id_usuario;
        this.tipo_atividade = tipo_atividade;
        this.descricao_meta = descricao_meta;
        this.valor_meta     = valor_meta;
        this.data_inicial   = data_inicial;
        this.data_final     = data_final;
        this.status_meta    = status_meta;
    }

    criarMeta(tipoAtividade, descricaoMeta, valorMeta, dataInicial, dataFinal){}
    editarMeta(idMeta, tipoAtividade, descricaoMeta, valorMeta, dataInicial, dataFinal){}
    excluirMeta(idMeta){}
    getMeta(idMeta){}
    getMetas(idUsuario){}


}