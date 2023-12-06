import React, { useEffect, useState } from 'react'
import SearchBanner from '../../Components/CategoryProduct/SearchBanner'
import CategorySidebar from '../../Components/CategoryProduct/CategorySidebar'
import useAxiosSecure from '../../utiliz/useAxiosSecure'
import ProductSection from '../../Components/CategoryProduct/ProductSection'

const Category = () => {
  const axiosSecure = useAxiosSecure();
  const [handleTabCategory, setHandleTabCategory] = useState("Laptop");
  const [products, setProducts] = useState();
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    if (handleTabCategory) {
      axiosSecure.get(`/category/${handleTabCategory}`).then(res => setProducts(res.data)).catch(err => console.log(err.message));
    }
  }, [handleTabCategory])

  useEffect(() => {
    if (searchValue) {
      axiosSecure.get("/products")
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

export default Category