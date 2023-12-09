import { AiOutlineShopping } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import logo from "../../../assets/pageimg/Logo.png"

const FooterHead = () => {
    return (
        <div className="py-10">
             <div className="flex justify-around mt-5">
                <img src={logo} alt="" />
                <div>
                    <div className="flex">
                        <div className="ml-5">
                            <h3 className="text-6 font-medium text-black">Subcribe our Newsletter</h3>
                            <p className="text-[14px] font-normal  text-[#999]">Pellentesque eu nibh eget mauris congue mattis matti.</p>
                        </div>
                    </div>
                </div>
                <div className="" >
                    <form className=" rounded-2xl">
                        <input className="w-[300px] py-[9px] px-4 border rounded-l-2xl " type="email" placeholder="Your email Address" />
                        <button className="btn  bg-green-500 py-4 px-6 -ml-[1px]">Search </button>
                    </form>
                </div>
               
            </div>
        </div>
    );
};

export default FooterHead;