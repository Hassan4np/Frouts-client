import aple from "../../../assets/menus/Image.png"
import bannar from "../../../assets/menus/bannar.png"
import Rating from "react-rating";
import { MdOutlineStarOutline } from "react-icons/md";
import { FaStar,FaArrowRight } from "react-icons/fa";

const RecentProducts = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-2 ">
            <div>
                <h1 className="text-xl font-medium">Hot Deals</h1>
                <div className="flex border w-[312px] rounded-md px-5 border-emerald-700 mt-5">
                    <div>
                        <img src={aple} alt="" className="h-24 w-24 mr-2" />
                    </div>
                    <div className="mt-5">
                        <p className="text-[14px]text-[#4D4D4D] font-normal">Green Apple</p>
                        <h5 className="text-base font-medium">$25</h5>
                        <Rating className="text-[#FF6A00]"
                            placeholderRating={4}
                            emptySymbol={<MdOutlineStarOutline />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-medium">Best Seller</h1>
                <div className="flex border w-[312px] rounded-md px-5  mt-5">
                    <div>
                        <img src={aple} alt="" className="h-24 w-24 mr-2" />
                    </div>
                    <div className="mt-5">
                        <p className="text-[14px] text-[#4D4D4D] font-normal">Green Apple</p>
                        <h5 className="text-base font-medium">$25</h5>
                        <Rating className="text-[#FF6A00]"
                            placeholderRating={4}
                            emptySymbol={<MdOutlineStarOutline />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-medium">Top Rated</h1>
                <div className="flex border w-[312px] rounded-md px-5 mt-5">
                    <div>
                        <img src={aple} alt="" className="h-24 w-24 mr-2" />
                    </div>
                    <div className="mt-5">
                        <p className="text-[14px] text-[#4D4D4D] font-normal">Green Apple</p>
                        <h5 className="text-base font-medium">$25</h5>
                        <Rating className="text-[#FF6A00]"
                            placeholderRating={4}
                            emptySymbol={<MdOutlineStarOutline />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        />
                    </div>
                </div>
            </div>
            <div className="w-[312px] h-[426px] " style={{ backgroundImage: `url(${bannar})` }}>
                <div className="text-center space-y-2 mt-10">
                    <h1 className="text-[12px] font-medium uppercase text-black">Summer Sale</h1>
                    <h1 className="text-3xl font-semibold text-green-500">75% off</h1>
                    <div>
                        <button className="btn text-green-500 bg-white py-3 px-5 text-base">Shop now<FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentProducts;