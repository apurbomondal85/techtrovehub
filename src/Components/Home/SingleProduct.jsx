import { Link } from "react-router-dom";


const SingleProduct = ({ product }) => {
    const { _id, productName, image, price, discount } = product;
    return (
        <div className="h-[500px] md:h-[450px] p-6 rounded-md shadow-md relative transform duration-300 hover:-translate-y-3">
            <img src={image} className="w-full h-[300px] md:h-[200px] rounded-md" alt="product image" />
            <div className="mt-4 space-y-4">
                <h1 className="text-xl md:text-2xl font-semibold text-dark">{productName}</h1>
                <p className="flex items-center gap-4 text-gray-900 text-xl font-semibold"><span>${(price - price * discount / 100).toFixed(2)}</span><span className="line-through font-light text-gray-400 text-sm">{discount > 0 && "$" + price}</span></p>
                <div className="flex items-center justify-between absolute bottom-4 left-2 right-2">
                    <Link to={`/product/${_id}`}><button className="font-semibold text-white py-2 px-4 rounded-md bg-primary">Details</button></Link>
                    <Link><button className="font-semibold text-white py-2 px-4 rounded-md bg-secondary">Add To Cart</button></Link>
                </div>
            </div>
            {discount > 0 && <div className="absolute top-2 right-2 py-1 px-4 rounded-md bg-dark font-semibold text-white">{discount}% OFF</div>}
        </div>
    )
}

export default SingleProduct