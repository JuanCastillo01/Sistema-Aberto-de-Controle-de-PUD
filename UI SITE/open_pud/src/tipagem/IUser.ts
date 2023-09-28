export interface IUserSigninRequest {
    nomeUsuario :  String,
    login  : String,
    email  : String,
    password : String,
}


export interface IUserLoginRequest {
    login  : String,
    password : String,
}


export interface IUserResponse {
    nomeUsuario :  String,
    login  : String,
    email  : String,
    permissao :string,
    password : String,
}
