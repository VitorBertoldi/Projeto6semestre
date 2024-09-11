class Dispositivo {
    constructor(id_dispositivo, id_usuario, nome_dispositivo, tipo_dispositivo, data_sincronizacao) {
        this.id_dispositivo     = id_dispositivo
        this.id_usuario         = id_usuario 
        this.nome_dispositivo   = nome_dispositivo
        this.tipo_dispositivo   = tipo_dispositivo
        this.data_sincronizacao = data_sincronizacao
    }
    
    criarDispositivo(idUsuario, nomeDispositivo, tipoDispositivo){}
    editarDispositivo(idDispositivo, nomeDispositivo, tipoDispositivo){}
    excluirDispositivo(idDispositivo){}
    getDispositivo(idDispositivo){}
    getDispositivos(idUsuario){}
}