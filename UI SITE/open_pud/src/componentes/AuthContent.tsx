import React, { useEffect, useState } from 'react'; 
import { request } from '../api/axiosHelper';

export const AuthContent : React.FC  = () => {
    const [data,setData]  =React.useState<any>(null)

    React.useLayoutEffect(()=> {
        request(
            "GET",  
            "/login",
            {}
        ).then((res) => {
            console.log(res)
            setData(res.data)
        } ).catch(error => console.error('Erro:', error));

    }, [])
    return(<div>{data && data.map((line: any,index:number) => {<p key={index}>{line}</p>})}</div>)
}   