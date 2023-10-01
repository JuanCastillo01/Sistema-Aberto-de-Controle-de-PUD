import { useState } from "react";
import { request } from "./axiosHelper";
import { IInstituicoes } from "../tipagem/IInstituicoes";
import { IErro } from "../tipagem/IGeral";
import { erroInitialState } from "../constantes/constantesGerais";

export function useGetAllInstituicoes(){
    const PATH_BUSCAR_TODAS = "/instituicoes"
    const PATH_ADICIONAR  = "/adicionarCasos"
    const [data, setData] = useState<IInstituicoes[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<IErro>(erroInitialState);
    
    const recuperarInstituicoes = async () => {
        setLoading(true)
        setData([])
        request(
            "GET",
            PATH_BUSCAR_TODAS,
            {}
        ).then((res)=>{
            setData(res.data.content)
        }).catch((erro)=>{
            setError(erro)
        }).finally(()=>{
            setLoading(false)
        })

    }    
    const adicionarInstituicoes = async () => {
        setLoading(true)
        setData([])
        request(
            "GET",
            PATH_ADICIONAR,
            {}
        ).then((res)=>{
            setData(res.data.content)
        }).catch((erro)=>{
            setError(erro)
        }).finally(()=>{
            setLoading(false)
        })

    }
    return {data, loading, error, recuperarInstituicoes, adicionarInstituicoes}
}