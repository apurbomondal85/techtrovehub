import { useEffect, useState } from "react"
import useAxiosSecure from "./useAxiosSecure";

const getAllProduct = () => {
    const [products, setProducts] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get("/products").then(res => setProducts(res.data)).catch(err => console.log(err));
    }, [])

    return products
}

export default getAllProduct