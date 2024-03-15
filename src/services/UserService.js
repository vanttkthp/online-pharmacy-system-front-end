import axios from "axios"

export const loginUser = async(data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, data)
    return res.data
}