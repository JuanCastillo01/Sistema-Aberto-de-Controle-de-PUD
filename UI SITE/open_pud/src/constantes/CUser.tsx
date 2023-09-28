import { IUserLoginRequest, IUserSigninRequest } from "../tipagem/IUser";

export const userLoginInitial : IUserLoginRequest = {
    login: "",
    password: ""
}
export const RequestInitialState : IUserSigninRequest= {
    nomeUsuario: "",
    login: "",
    email: "",
    password: ""
  }