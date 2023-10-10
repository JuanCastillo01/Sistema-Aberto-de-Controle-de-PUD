import { SetStateAction, useState } from "react";
import { request } from "../axiosHelper";
import { erroInitialState } from "../../constantes/constantesGerais";
import { IErro } from "../../tipagem/IGeral";
import { IAdmUsuario } from "../../tipagem/IUser";

export const useGetAllUsuarios = () => {
    const PATH_BUSCAR_TODAS = "/usuarios"
    
    const [data, setData] = useState<IAdmUsuario[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<IErro>(erroInitialState);
    
    const getAllUsuarios = async () => {
        setLoading(true)
        setData([])
        request(
            "GET",
            PATH_BUSCAR_TODAS,
            {}
        ).then((res: { data: { content: SetStateAction<IAdmUsuario[]>; }; })=>{
            setData(res.data.content)
        }).catch((erro: any)=>{
            setError(erro)
        }).finally(()=>{
            setLoading(false)
        })

    }
    const getAllUsuariosPorInstituicao = async (codigoInstituicao : number) => {
        setLoading(true)
        setData([])
        request(
            "GET",
            PATH_BUSCAR_TODAS + "/" + codigoInstituicao,
            {}
        ).then((res: any)=>{
            setData(res.data.content)
        }).catch((erro: any)=>{
            setError(erro)
        }).finally(()=>{
            setLoading(false)
        })

    }
       
    return {data, loading, error, getAllUsuarios,getAllUsuariosPorInstituicao }
}