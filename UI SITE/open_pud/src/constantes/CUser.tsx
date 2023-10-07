import { IUserLoginRequest, IUserSigninRequest } from "../tipagem/IUser";
import { InstitutoInitialState } from "./CInstituicoes";

export const userLoginInitial : IUserLoginRequest = {
    login: "",
    password: ""
}
export const RequestInitialState : IUserSigninRequest= {
    login: "",
    email: "",
    password: "",
    instituicao: InstitutoInitialState,
    dominio: ""
}