import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure"

const getOfferProducts = () => {
    const axiosSecure = useAxiosSecure();
    const [offer, setOffer] = useState([])

    useEffect(() => {
        axiosSecure.get("/offer-products").then(res => setOffer(res.data)).catch(err => console.log(err));
    }, [])

    return offer
}

export default getOfferProducts