import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import useAxiosSecure from "../../utiliz/useAxiosSecure";

const ProductDetails = () => {
  const axiosSecure = useAxiosSecure()
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    if (id) {
      axiosSecure.get(`/product/${id}`).then(res => setProduct(res.data)).catch(err => console.log(err.message))
    }
  }, [])

  return (
    <div className="py-16">
      <h1 className="text-center text-dark font-bold text-2xl md:text-3xl lg:text-4xl">Product Details</h1>
      <div className="mt-12 lg:mt-16 max-w-5xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 w-full h-full flex justify-center items-center">
          <img src={product?.image} className="w-full h-[400px]" alt="product image" />
        </div>
        <div className="p-4 space-y-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-dark font-bold">{product?.productName}</h1>
          <p className="text-gray-700 text-base sm:text-xl">{product?.description}</p>
          <p className="flex items-center gap-4 text-gray-900 text-xl font-semibold"><span>${(product?.price - product?.price * product?.discount / 100).toFixed(2)}</span><span className="line-through font-light text-gray-400 text-sm">{product?.discount > 0 && "$" + product?.price}</span></p>
          <div className="flex items-center gap-4">
            <p className="text-gray-700 text-base sm:text-xl">{product?.ram || product?.type || product?.capacity || product?.screenSize}</p>
            <p className="text-gray-700 text-base sm:text-xl">{product?.rom || product?.switchType || product?.driverSize || product?.resolution || product?.dpi}</p>
          </div>
          {product?.discount > 0 && <p className="py-1 px-2 bg-dark text-white rounded-md inline-block">{product?.discount}% OFF</p>}
          <Link className="block"><button className="font-semibold text-white py-2 px-4 rounded-md bg-primary">Add To Cart</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails