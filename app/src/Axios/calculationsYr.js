import { AxiosInstance } from "./axios";

export const getOperRozp = async ()=>{
    const calcList = await AxiosInstance.get('/api/oper_rozps?page=1');
    return calcList.data;
}

export const getOperRozpElement = async (id)=>{
    const calcList = await AxiosInstance.get(`/api/oper_rozps/${id}`);
    return calcList.data;
}


export const getCulcPrice = async (path)=>{
    const calcList = await AxiosInstance.get(path);
    return calcList.data;
}