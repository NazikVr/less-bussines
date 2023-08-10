import { AxiosInstance } from "../../Axios/axios";


export const getServiceOnlineList = async ()=>{
    const ServiceList = await AxiosInstance.get('/api/lep_diia_service_onlines?page=1&active=on&typeService=pobut');
    return ServiceList.data;
}