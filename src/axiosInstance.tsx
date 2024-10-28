import axios from "axios";

export const axiosInstance = axios.create()

export function configureAxios() {
    axiosInstance.interceptors.request.use(
        async(config) => {
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )
}