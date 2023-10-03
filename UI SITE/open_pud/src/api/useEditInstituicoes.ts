import { useState } from "react";
import { request } from "./axiosHelper";
import { IInstituicoes } from "../tipagem/IInstituicoes";
import { IErro } from "../tipagem/IGeral";
import { erroInitialState } from "../constantes/constantesGerais";

export function useEditInstituicoes(){
    const PATH_EDITAR  = "/instituicoes/editar"
    const [data, setData] = useState<IInstituicoes>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<IErro>(erroInitialState);
       
    const editarInstituicoes = async (instituicao : IInstituicoes) => {
        console.log(instituicao)
        setLoading(true)
        request(
            "PUT",
            PATH_EDITAR,
            instituicao
        ).then((res)=>{
            setData(res.data.content)
        }).catch((erro)=>{
            setError(erro)
        }).finally(()=>{
            setLoading(false)
        })

    }
    return {data, loading, error, editarInstituicoes}
}