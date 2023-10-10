export type permissonTypesNames = "VISITANTE_DA_INSTITUICAO" | "GESTOR_DA_INSTITUICAO" | "ADMINISTRADOR_DA_INSTITUICAO" | "ADMINISTRATOR_DO_SISTEMA" | null
export type moduleNames = "Usuario" | "Principal" | "Instituição" | "Instituições" | "Matrizes" | "PUDs" | "Referencias" | "Usuarios" | "Contato"
export type modulePaths = "/usuario" | "/principal" | "/instituição" | "/manter-intituicoes" | "/manter-matrizes" | "/manter-puds" | "/manter-referencias"| "/manter-usuarios" | "/contato"

export interface IPermissaoFuncionalities{
    permission: permissonTypesNames,
    module: ModulePermissions[]
}

export interface ModulePermissions{
    moduleName: moduleNames
    functions: FunctionalityPermissao[]
    
}

export interface FunctionalityPermissao{
    name: string,
    permited: boolean
}

export interface IModule {
  name: moduleNames,
  path: modulePaths,
  icone: any
  element: any,
  permissonType: permissonTypesNames[]
}
