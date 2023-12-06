import { useEffect, useState } from "react";
import CategorySidebar from "../../Components/CategoryProduct/CategorySidebar"
import ProductSection from "../../Components/CategoryProduct/ProductSection"
import SearchBanner from "../../Components/CategoryProduct/SearchBanner"
import useAxiosSecure from "../../utiliz/useAxiosSecure";
import { useLocation } from "react-router-dom";

const OfferPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  const axiosSecure = useAxiosSecure();
  const [handleTabCategory, setHandleTabCategory] = useState(category ? category :"Laptop");
  const [products, setProducts] = useState();
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    if (handleTabCategory) {
      axiosSecure.get(`/offer-category/${handleTabCategory}`).then(res => setProducts(res.data)).catch(err => console.log(err.message));
    }
  }, [handleTabCategory])

  useEffect(() => {
    if (searchValue) {
      axiosSecure.get("/offer-products")
        .then(res => {
          const filtered = res.data.filter((product) => product.productName.toLowerCase().includes(searchValue.toLowerCase()));
          setProducts(filtered)
        })
        .catch(err => console.log(err.message));
    }
  }, [searchValue])

  return (
    <div>
      <SearchBanner setSearchValue={setSearchValue} />
      <div className="mt-12">
        <CategorySidebar handleTabCategory={setHandleTabCategory} />
        <ProductSection products={products} />
      </div>
    </div>
  )
}

export default OfferPage