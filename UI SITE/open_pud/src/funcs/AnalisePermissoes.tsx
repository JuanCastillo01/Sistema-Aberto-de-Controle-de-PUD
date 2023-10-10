import { getPermissao } from "../api/axiosHelper";
import { IModule, permissonTypesNames } from "../tipagem/IPermissoes";


export const filtraModulosPorPermissoes = (modulos: IModule[]) => {
    const permissao = getPermissao()
    console.log(permissao)
    
    return modulos.filter((modulo: IModule) => {
        return modulo.permissonType.includes(permissao as permissonTypesNames)
    })
  };

  
  