import HeaderBannar from "../Global/HeaderBannar";
import b from "../../../assets/category/shopbannar.png"
import { FaArrowRight, FaStar } from "react-icons/fa";
import bannar from "../../../assets/menus/bannar.png"
import Rating from "react-rating";
import { MdOutlineStarOutline } from "react-icons/md";
import aple from "../../../assets/menus/Image.png"
import { IoBagHandleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import "./Shoppage.css"
import { Link } from "react-router-dom";


const ShopPage = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch('Projducts.json')
            .then(res => res.json())
            .then(data => {
                setdata(data)
            })
    }, [])
    console.log(data)
    return (
        <div className="min-h-[450px]">
            <HeaderBannar imgg={b}></HeaderBannar>
            <div className="flex justify-around mt-5" >
                <div className="">
                    <button className="btn btn-primary px-8 py-3">filter</button>
                </div>
                <div className="flex">
                    <h3 className="mr-2 mt-3 text-[14px] font-normal text-[#808080]">Sort by</h3>
                    <select className="select select-bordered w-[166px] h-10 text-[14px] font-normal text-[#4D4D4D]">
                        <option disabled selected>select one</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <h5 className="text-base font-normal text-[#666]"><span className="text-black font-semibold"> 52</span>Result font</h5>
            </div>
            <div className="flex">
                <div className="w-1/4">
                    <div className="min-h-[200px]" >
                        <h1 className="text-xl font-medium">All Category</h1>
                        <div className="flex text-[14px] font-normal pt-3 ">
                            <input type="checkbox" checked="checked" className="checkbox checkbox-xs mr-3 mt-1" />
                            <h6>Fish</h6>
                        </div>
                        <div className="flex  text-[14px] font-normal pt-3 ">
                            <input type="checkbox" checked="checked" className="checkbox checkbox-xs mr-3 mt-1" />
                            <h6>Vegetable</h6>
                        </div>
                    </div>
                    <div className="py-5 min-h-[200px]">
                        <h1 className="text-xl font-medium">Popular Tag</h1>
                        <div className="py-5">
                            <button className="btn btn-sm text-[14px] text-[#1A1A1A] bg-[#F2F2F2] rounded-xl py-3 px-2 mr-2">vegetable</button>
                            <button className="btn btn-sm text-[14px] text-[#1A1A1A] bg-[#F2F2F2] rounded-xl py-3 px-2 mr-2">Froute</button>

                        </div>
                    </div>
                    <div>
                        <div className="w-[312px] h-[426px] " style={{ backgroundImage: `url(${bannar})` }}>
                            <div className="text-center space-y-2 mt-10">
                                <div className="py-5">
                                    <h1 className="text-2xl font-normal uppercase   text-black"><span className="text-3xl text-[#FF8A00] p-3">79%</span> Discount</h1>
                                    <p className="text-base font-normal text-gray-500">on your first order</p>
                                </div>
                                <div>
                                    <button className="btn text-green-500 py-3 px-5 text-base">Shop now<FaArrowRight></FaArrowRight></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[200px]">
                        <h1 className="text-xl font-normal py-5">Sale Products</h1>
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
                </div>
                <div className="w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                data.map(item => <Link key={item.name} to="/itemdetails"><div  id='shopid' className="card w-[312px] h-[406px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
                <figure className="px-10 h-[312px] w-[302px] p-5">
                    <img src={item.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2  className="card-title text-[14px] font-normal shoptitle text-[#4D4D4D]">{item.name}</h2>
                    <div className="flex justify-between">
                        <p className="text-[16px] font-medium">${item.price}</p>
                        <IoBagHandleOutline className="text-2xl shopticone "></IoBagHandleOutline>
                    </div>
                    <Rating className="text-[#FF6A00]"
                        placeholderRating={item.rating}
                        emptySymbol={<MdOutlineStarOutline />}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar />}
                    />
                </div>
            </div></Link>)
            }
        </div>
                </div>
            </div>

        </div>
    );
};

export default ShopPage;