import { useState, SetStateAction } from "react";
import { erroInitialState } from "../../constantes/constantesGerais";
import { IErro } from "../../tipagem/IGeral";
import { IInstituicoes } from "../../tipagem/IInstituicoes";
import { request } from "../axiosHelper";

export function useGetAllInstituicoes(){
    const PATH_BUSCAR_TODAS = "/instituicoes"
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
        ).then((res: { data: { content: SetStateAction<IInstituicoes[]>; }; })=>{
            setData(res.data.content)
        }).catch((erro: any)=>{
            setError(erro)
        }).finally(()=>{
            setLoading(false)
        })

    }    
    return {data, loading, error, recuperarInstituicoes}
}