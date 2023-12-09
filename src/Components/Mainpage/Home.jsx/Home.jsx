import Carosolsection from "./Carosolsection";
import Category from "./Category";
import FeatureProducts from "./FeatureProducts";
import Footer from "./Footer";
import FooterHead from "./FooterHead";
import Galary from "./Galary";
import NewestProducts from "./NewestProducts";
import OfferProducts from "./OfferProducts";
import RecentProducts from "./RecentProducts";
import Review from "./Review";
import Service from "./Service";

const Home = () => {
    return (
        <div>
            <Carosolsection></Carosolsection>
            <Service></Service>
            <div>
                <h1 className="text-4xl font-semibold text-black py-10 text-center">Featured Products</h1>
                <FeatureProducts></FeatureProducts>
            </div>
            <RecentProducts></RecentProducts>
            <div>
                <h1 className="text-4xl font-semibold text-center py-10">To Category</h1>
                <Category></Category>
            </div>
            <OfferProducts></OfferProducts>
            <div>
                <h1 className="text-4xl font-semibold py-5">Newest Products</h1>
                <NewestProducts></NewestProducts>
            </div>
            <div className="p-5 bg-[#EDF2EE]">
                <div>
                    <h1 className="text-4xl font-semibold py-5"> Client Testimonial</h1>
                    <Review></Review>
                </div>
            </div>
            <div>
                <h1 className="text-4xl  text-center font-semibold py-10">Follow us on Instagram</h1>
                <Galary></Galary>
            </div>
            <div  className="bg-[#EDF2EE] py-2 mt-5 mb-5">
                <FooterHead ></FooterHead>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;