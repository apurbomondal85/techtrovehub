
import BannerHero from '../../Components/BannerHero'
import FeaturedProducts from '../../Components/FeaturedProducts'
import OfferProducts from '../../Components/OfferProducts'
import ProductCategory from '../../Components/ProductCategory'

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