import axios from "axios";
import { IToken } from "../tipagem/IUser";
import React from "react";

axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.headers.post["Content-Type"] = "application/json"    

export const getAccessToken = () => {
    return window.localStorage.getItem("access_token")
}
export const getToken = () => {
    return window.localStorage.getItem("token")
}

export const setInfoToken = (token : IToken) => {
    window.localStorage.setItem("access_token", token.accessToken)
    window.localStorage.setItem("token", token.token)
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
  