
import BannerHero from '../../Components/Home/BannerHero'
import ClientReviews from '../../Components/Home/ClientReviews'
import FeaturedProducts from '../../Components/Home/FeaturedProducts'
import OfferBanner from '../../Components/Home/OfferBanner'
import OfferProducts from '../../Components/Home/OfferProducts'
import ProductCategory from '../../Components/Home/ProductCategory'

const Home = () => {
    return (
        <>
            <BannerHero />
            <ProductCategory />
            <FeaturedProducts />
            <OfferBanner />
            <OfferProducts />
            <ClientReviews />
        </>
    )
}

export default Home