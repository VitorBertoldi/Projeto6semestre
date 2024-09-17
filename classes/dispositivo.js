class Dispositivo {
    constructor(id_dispositivo, id_usuario, nome_dispositivo, tipo_dispositivo, data_sincronizacao) {
        if (Dispositivo.instance) {
            return Dispositivo.instance; // Retorna a instância existente se já foi criada
        }

        this.id_dispositivo     = id_dispositivo;
        this.id_usuario         = id_usuario;
        this.nome_dispositivo   = nome_dispositivo;
        this.tipo_dispositivo   = tipo_dispositivo;
        this.data_sincronizacao = data_sincronizacao;

        Dispositivo.instance = this; // Guarda a instância para garantir que seja única
    }

    // Simulando um "banco de dados" em memória
    static dispositivosDB = [];

    static getInstance() {
        if (!Dispositivo.instance) {
            Dispositivo.instance = new Dispositivo();
        }
        return Dispositivo.instance;
    }

    criarDispositivo(idUsuario, nomeDispositivo, tipoDispositivo) {
        const idDispositivo = Dispositivo.dispositivosDB.length + 1;
        const dataSincronizacao = new Date().toISOString();
        
        const novoDispositivo = new Dispositivo(
            idDispositivo, 
            idUsuario, 
            nomeDispositivo, 
            tipoDispositivo, 
            dataSincronizacao
        );
        
        Dispositivo.dispositivosDB.push(novoDispositivo);
        return novoDispositivo;
    }

    editarDispositivo(idDispositivo, nomeDispositivo, tipoDispositivo) {
        const dispositivo = Dispositivo.dispositivosDB.find(d => d.id_dispositivo === idDispositivo);
        if (dispositivo) {
            dispositivo.nome_dispositivo = nomeDispositivo;
            dispositivo.tipo_dispositivo = tipoDispositivo;
            dispositivo.data_sincronizacao = new Date().toISOString();
            return dispositivo;
        }
        return null; 
    }

    excluirDispositivo(idDispositivo) {
        const index = Dispositivo.dispositivosDB.findIndex(d => d.id_dispositivo === idDispositivo);
        if (index !== -1) {
            return Dispositivo.dispositivosDB.splice(index, 1);
        }
        return null; 
    }

    getDispositivo(idDispositivo) {
        return Dispositivo.dispositivosDB.find(d => d.id_dispositivo === idDispositivo) || null;
    }

    getDispositivos(idUsuario) {
        return Dispositivo.dispositivosDB.filter(d => d.id_usuario === idUsuario);
    }
}
