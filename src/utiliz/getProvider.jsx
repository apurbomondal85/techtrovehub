import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider";

const getProvider = () => {
    return useContext(AuthContext) || {}
}

export default getProvider