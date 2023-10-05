import { useState } from "react";
import { erroInitialState } from "../../constantes/constantesGerais";
import { IErro } from "../../tipagem/IGeral";
import { IRefencias } from "../../tipagem/IRefencias";
import { request } from "../axiosHelper";

export const useAddReferencias = () => {
    const PATH_ADICIONAR_MOCK = "/referencias/inserir/mock"
    const PATH_ADICIONAR = "/referencias/inserir"

    const [data, setData] = useState<IRefencias>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<IErro>(erroInitialState);

    const addReferencias = async (referencia: IRefencias) => {
        setLoading(true)
        
        request(
            "POST",
            PATH_ADICIONAR,
            referencia
        ).then((res)=>{
            setData(res.data.content)
        }).catch((erro)=>{
            setError(erro)
        }).finally(()=>{
            setLoading(false)
        })

    }    
    return {data, loading, error, addReferencias}

}