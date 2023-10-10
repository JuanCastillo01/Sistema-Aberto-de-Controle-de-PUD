import axios from "axios";
import { IToken, IUserResponse } from "../tipagem/IUser";

axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.headers.post["Content-Type"] = "application/json"    

export const getAccessToken = () => {
    return window.localStorage.getItem("access_token")
}
export const getToken = () => {
    return window.localStorage.getItem("token")
}
export const getEmail = () => {
    return window.localStorage.getItem("email")
}
export const getChaveInstituicao = () => {
    return window.localStorage.getItem("chaveInstituicao")
}
export const getNomeInstituicao = () => {
    return window.localStorage.getItem("nomeInstituicao")
}
export const getPermissao = () => {
    return window.localStorage.getItem("permisao")
}


export const setInfoToken = (token : IToken) => {
    window.localStorage.setItem("access_token", token.accessToken)
    window.localStorage.setItem("token", token.token)
}


export const setUserinfo = (userInfo:IUserResponse) => {
    window.localStorage.setItem("permisao","")
    window.localStorage.setItem("email","")
    window.localStorage.setItem("chaveInstituicao","")
    window.localStorage.setItem("nomeInstituicao","")
    window.localStorage.setItem("permisao",userInfo.permissao)
    window.localStorage.setItem("email",userInfo.email)
    window.localStorage.setItem("chaveInstituicao",userInfo.instituicao.id ? userInfo.instituicao.id.toString() : "null")
    window.localStorage.setItem("nomeInstituicao",userInfo.instituicao.siglaInstituicao + " - " + userInfo.instituicao.nomeInstituicao)

}


export const cleanToken  = () => {
    window.localStorage.setItem("access_token", "null")
    window.localStorage.setItem("token", "null")
}

export const request = (metodos: string, url: string, data: any) => {
    let headers = {}
    if(getAccessToken() !== null && getAccessToken() !== "null"){
        headers  = {"Authorization" : `Bearer ${getAccessToken()}`}
    }
    return axios({
        method :  metodos,
        headers: headers,
        url : url,
        data : data
    })
}

export const nonAuthRequest = (metodos: string, url: string, data: any) => {

    return axios({
        method :  metodos,

        url : url,
        data : data
    })
}

export const refreshToken  = () => {
    if (getAccessToken() && getToken()){
        let tokenInfo  : IToken ={
            accessToken: getAccessToken() ?? "" ,
            token: getToken() ?? ""
        }
        request(
            "POST",
            "/refreshToken",
            tokenInfo
        ).then((res) => {
            setInfoToken(res.data)
        })
    }
}
  