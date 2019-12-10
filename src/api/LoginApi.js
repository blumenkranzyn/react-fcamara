import api from "../services/api";

export const checkCredentials = async (credencials) => {
    try {
        const response = await api.get("/sessions")
        let mail = response.data.find(obj => obj.email === credencials.email)
        let password = response.data.find(obj => obj.password === credencials.password)
        return mail && password ? true : false
    } catch (err) {
        throw new Error(err)
    }
}