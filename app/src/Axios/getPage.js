import { AxiosInstance } from "./axios";

export const getPage = async (isLoading, page)=>{
    isLoading(true);
    const pageItem = await AxiosInstance.get(`/api/pages?synonym=${page}`);
    isLoading(false);
    return pageItem.data;
}

export const getMenuList = async (type)=>{
    // isLoading(true);
    const menu = await AxiosInstance.get(`/api/menus?page=1&type=${type}`);
    // isLoading(false);
    return menu.data;
}
