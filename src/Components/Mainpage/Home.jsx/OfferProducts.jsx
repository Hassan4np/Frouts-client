import { FaArrowRight } from "react-icons/fa";
import f1 from "../../../assets/category/offer1.png"
import f2 from "../../../assets/category/offer2.png"
import f3 from "../../../assets/category/offer3.png"

const OfferProducts = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
             <div className="w-[424px] h-[536px] " style={{ backgroundImage: `url(${f1})` }}>
                <div className="text-center space-y-4 mt-10">
                    <h1 className="text-[14px] font-medium uppercase text-white">Best Deals</h1>
                    <h1 className="text-4xl font-semibold text-white">Sale of the Month</h1>
                    <div className="mt-10">
                        <button className="btn text-green-500 bg-white py-3 px-5 text-base">Shop now<FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
             <div className="w-[424px] h-[536px] " style={{ backgroundImage: `url(${f2})` }}>
                <div className="text-center space-y-2 mt-10">
                    <h1 className="text-[14px] font-medium uppercase text-white">85% Fat Free</h1>
                    <h1 className="text-4xl font-semibold text-white">Low-Fat Meat</h1>
                    <h5 className="text-[18px] pb-7 pt-3 font-normal text-white">Started at <span className="text-[18PX] font-semibold text-[#FF8A00]">$79.99</span></h5>
                    <div>
                        <button className="btn text-green-500 bg-white py-3 px-5 text-base">Shop now<FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
             <div className="w-[424px] h-[536px] " style={{ backgroundImage: `url(${f3})` }}>
                <div className="text-center space-y-2 mt-10">
                    <h1 className="text-[14px] font-medium uppercase text-black">Summer Sale</h1>
                    <h1 className="text-4xl font-semibold text-black">100% Fresh Fruit</h1>
                    <h5 className="text-[18px] pb-7 pt-3 font-normal text-black">Up to <span className="text-[18PX] rounded-md font-semibold bg-black px-3 py-[6px] text-[#FF8A00]">64% OFF</span></h5>
                    <div>
                        <button className="btn text-green-500 bg-white py-3 px-5 text-base">Shop now<FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferProducts;