import { axiosIntance } from "../utils/axiosIntance";
export const getData = async () => {

    const response = await axiosIntance.get("/")
    return response.data.data
}