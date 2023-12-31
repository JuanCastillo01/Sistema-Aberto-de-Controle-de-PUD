import { IInstituicoes } from "./IInstituicoes"

export interface IUserSigninRequest {
    login  : string,
    email  : string,
    password : string,
    instituicao: IInstituicoes
    dominio:string
}


export interface IUserLoginRequest {
    login  : string,
    password : string,
}


export interface IUserResponse {
    login  : string,
    email  : string,
    permissao :string,
    password : string,
    instituicao: IInstituicoes 
}
export interface IAdmUsuario {
    id: number,
    login  : string,
    email  : string,
    permissao :string,
}

export interface IToken {
    accessToken : string, 
    token: string
}

