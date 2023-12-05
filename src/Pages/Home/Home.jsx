
import BannerHero from '../../Components/Home/BannerHero'
import FeaturedProducts from '../../Components/Home/FeaturedProducts'
import OfferProducts from '../../Components/Home/OfferProducts'
import ProductCategory from '../../Components/Home/ProductCategory'

const Home = () => {
    return (
        <>
            <BannerHero />
            <ProductCategory />
            <FeaturedProducts />
            <OfferProducts />
        </>
    )
}

export default Home