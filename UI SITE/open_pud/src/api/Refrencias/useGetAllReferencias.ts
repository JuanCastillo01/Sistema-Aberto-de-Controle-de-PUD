import { useState } from "react";
import { erroInitialState } from "../../constantes/constantesGerais";
import { IErro } from "../../tipagem/IGeral";
import { IRefencias } from "../../tipagem/IRefencias";
import { request } from "../axiosHelper";

export const useGetAllReferencias = () => {
    const PATH_BUSCAR_TODAS = "/referencias"
    const [data, setData] = useState<IRefencias[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<IErro>(erroInitialState);

    const recuperarReferencias = async () => {
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
    return {data, loading, error, recuperarReferencias}

}