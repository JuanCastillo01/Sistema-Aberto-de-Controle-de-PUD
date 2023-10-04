import { useState } from "react";
import { IErro } from "../../tipagem/IGeral";
import { erroInitialState } from "../../constantes/constantesGerais";
import { IRefencias } from "../../tipagem/IRefencias";
import { request } from "../axiosHelper";

export const useEditRefrencias = () => {
    const PATH_EDITAR = "/referencias/editar"
    const [data, setData] = useState<IRefencias>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<IErro>(erroInitialState);

    const editReferencias = async (referencia: IRefencias) => {
        setLoading(true)
        
        request(
            "PUT",
            PATH_EDITAR,
            referencia
        ).then((res)=>{
            setData(res.data.content)
        }).catch((erro)=>{
            setError(erro)
        }).finally(()=>{
            setLoading(false)
        })

    }    
    return {data, loading, error, editReferencias}
}