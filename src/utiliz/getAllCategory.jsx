import { useEffect, useState } from "react"
import useAxiosSecure from "./useAxiosSecure";

const getAllCategory = () => {
    const [category, setCategory] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get("/category").then(res => setCategory(res.data)).catch(err => console.log(err));
    },[])

  return category
}

export default getAllCategory