import { AxiosInstance } from "./axios";

export const getNewsList = async (isLoading, page)=>{
    isLoading(true);
    const newsList = await AxiosInstance.get(`/api/news?page=${page}`);
    isLoading(false);
    return newsList.data;
}

export const getNewsItem = async (isLoading, id)=>{
    isLoading(true);
    const newsList = await AxiosInstance.get(`/api/news/${id}`)
    isLoading(false);
    return newsList.data;
}