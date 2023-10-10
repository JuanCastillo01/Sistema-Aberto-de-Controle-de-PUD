import { IPermissaoFuncionalities, ModulePermissions } from "../tipagem/IPermissoes";

export const listaPermissoes = [ "VISITANTE_DA_INSTITUICAO" , "GESTOR_DA_INSTITUICAO" , "ADMINISTRADOR_DA_INSTITUICAO" , "ADMINISTRATOR_DO_SISTEMA" , null]

export const permissoesAdminSistema: IPermissaoFuncionalities = {
    permission: "ADMINISTRATOR_DO_SISTEMA",
    module: [{
        moduleName: "Instituições",
        functions: [
            {
                name: "adiconar",
                permited: true
            }, {
                name: "editar",
                permited: true
            }, {
                name: "visualizar",
                permited: true
            },
        ]
    },
    {
        moduleName: "Referencias",
        functions: [
            {
                name: "adiconar",
                permited: false
            }, {
                name: "editar",
                permited: true
            }, {
                name: "visualizar",
                permited: true
            }
        ]
    }
    ]
}

export const permissoesAdminInstituicao: IPermissaoFuncionalities = {
    permission: "ADMINISTRATOR_DO_SISTEMA",
    module: [{
        moduleName: "Instituições",
        functions: [
            {
                name: "adiconar",
                permited: false
            }, {
                name: "editar",
                permited: false
            }, {
                name: "visualizar",
                permited: false
            },
        ]
    },
    {
        moduleName: "Referencias",
        functions: [
            {
                name: "adiconar",
                permited: false
            }, {
                name: "editar",
                permited: true
            }, {
                name: "visualizar",
                permited: true
            }
        ]
    }
    ]
}
export const permissoesGestores: IPermissaoFuncionalities = {
    permission: "ADMINISTRATOR_DO_SISTEMA",
    module: [{
        moduleName: "Instituições",
        functions: [
            {
                name: "adiconar",
                permited: false
            }, {
                name: "editar",
                permited: false
            }, {
                name: "visualizar",
                permited: false
            },
        ]
    },
    {
        moduleName: "Referencias",
        functions: [
            {
                name: "adiconar",
                permited: false
            }, {
                name: "editar",
                permited: true
            }, {
                name: "visualizar",
                permited: true
            }
        ]
    }
    ]
}

export const permissoesVsitantes: IPermissaoFuncionalities = {
    permission: "VISITANTE_DA_INSTITUICAO",
    module: [{
        moduleName: "Instituições",
        functions: [
            {
                name: "adiconar",
                permited: false
            }, {
                name: "editar",
                permited: false
            }, {
                name: "visualizar",
                permited: false
            },
        ]
    },
    {
        moduleName: "Referencias",
        functions: [
            {
                name: "adiconar",
                permited: false
            }, {
                name: "editar",
                permited: false
            }, {
                name: "visualizar",
                permited: true
            }
        ]
    }
    ]
}


