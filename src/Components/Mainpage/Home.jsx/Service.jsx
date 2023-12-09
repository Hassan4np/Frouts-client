
import {  FaCarSide, FaDollarSign, FaHeadphones, FaPaypal } from "react-icons/fa";
const Service = () => {
    return (
        <div>
            <div className=" flex items-center justify-center  ">
                <div className="w-[80%] mx-auto h-[120px] flex gap-5 border p-5  shadow-md">
                    <div className="flex">
                        <FaCarSide className="text-3xl mr-3 mt-2 text-green-500" />
                        <div>
                            <h6 className="text-base font-semibold text-black">Free Shipping</h6>
                            <p className="text-[14px] font-normal text-[#999]">Free shipping on all your order</p>
                        </div>
                    </div>
                    <div className="flex">
                        <FaHeadphones className="text-3xl mr-3 mt-2  text-green-500" />
                        <div>
                            <h6 className="text-base font-semibold text-black">Customer Support 24/7</h6>
                            <p className="text-[14px] font-normal text-[#999]">Instant access to Support</p>
                        </div>
                    </div>
                    <div className="flex">
                        <FaPaypal className="text-3xl mr-3 mt-2  text-green-500" />
                        <div>
                            <h6 className="text-base font-semibold text-black">Instant access to Support</h6>
                            <p className="text-[14px] font-normal text-[#999]">We ensure your money is save</p>
                        </div>
                    </div>
                    <div className="flex">
                        <FaDollarSign className="text-3xl mr-3 mt-2  text-green-500" />
                        <div>
                            <h6 className="text-base font-semibold text-black">Money-Back Guarantee</h6>
                            <p className="text-[14px] font-normal text-[#999]">30 Days Money-Back Guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;