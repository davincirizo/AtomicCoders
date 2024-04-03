import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_URL

export const ApiProducts = axios.create({
    baseURL:`${apiUrl}/products`,
})

export const ApiLogin = axios.create({
    baseURL:`${apiUrl}/login`,
})