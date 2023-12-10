import HeaderBannar from "../Global/HeaderBannar";
import b from "../../../assets/category/category2.png"
import apple from "../../../assets/menus/Image (3).png"
import Rating from "react-rating";
import { MdOutlineStarOutline } from "react-icons/md";
import { FaCartPlus, FaFacebook, FaInstagram, FaStar, FaTwitter } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const Itemdetails = () => {
    return (
        <div className="min-h-[200px]">
            <HeaderBannar imgg={b}></HeaderBannar>
            <div className="flex ">
                < div className="h-[450px] w-[400px] px-5 flex justify-center ">
                    <img src={apple} alt="" />
                </div>
                <div className="px-5 space-y-3 py-5  w-3/4">
                    <div className="flex ">
                        <h1 className="text-3xl font-medium text-black mr-5">Apple</h1>
                        <div className="mt-2"><span className="text-[12px] w-16 h-5 px-3 py-1  border rounded-md font-normal  bg-green-300">In Stock</span></div>
                    </div>
                    <div className="flex">
                        <Rating className="text-[#FF6A00] mr-2"
                            placeholderRating={4}
                            emptySymbol={<MdOutlineStarOutline />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        />
                        <div className="flex ">
                            <p className="text-[12px] font-normal mt-0.5 mr-2">4 Review</p>
                            <p className="text-[14] font-medium"><li>SKU<span>2566</span></li></p>
                        </div>
                    </div>
                    <div className="flex ">
                        <h5 className="text-base text-gray-500 mr-5">$48 <span className="text-lg font-medium ml-1 text-green-400">$17.10</span></h5>
                        <div className=""><span className="text-[12px] w-16 h-5 px-3 py-1  border rounded-md text-red-600 font-medium bg-red-200">64% Off</span></div>
                    </div>
                    <hr className="w-full" />
                    <div className="flex justify-between">
                        <div className="flex">
                            <h4 className="text-lg font-medium mt-1 mr-2">Brand</h4>
                            <div className="avatar">
                                <div className="w-10 rounded">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="flex" >
                            <h5 className="text-lg font-medium mr-3 text-gray-500">Share item</h5>
                            <div className="mt-2 ">
                                <FaFacebook className="text-xl mr-2 bg-green-600 text-white rounded-full "></FaFacebook>
                            </div>
                            <div className="mt-2">
                                <FaTwitter className="text-xl mr-2"></FaTwitter>
                            </div>
                            <div className="mt-2">
                                <FaInstagram className="text-xl mr-2"></FaInstagram>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Dolores corporis dolor odio, officiis eveniet et sapiente ipsam assumenda. Ab, eaque?
                    </p>
                    <hr />
                    <div className="flex">
                        <div className="flex gap-2  w-2/12">
                            <button className="btn bg-gray-300 rounded-full">-</button>
                            <p className="mt-3">5</p>
                            <button className="btn bg-gray-300 rounded-full">+</button>
                        </div>
                        <div className="w-8/12">
                            <button className="btn text-white w-full bg-green-500 py-3 px-5 text-base">Shop now<FaCartPlus></FaCartPlus></button>
                        </div>
                    </div>
                    <hr />
                    <h5 className="text-base font-medium text-black">Category: <span className="text-gray-500 font-normal text-[14px]">Fish</span></h5>
                    <h5 className="text-base font-medium text-black">Tag: <span className="text-gray-500 font-normal text-[14px]">Health</span></h5>
                </div>
            </div>
            <div className="text-center" >
                <Tabs className="min-h-[150px]">
                    <TabList>
                        <Tab>Descriptions</Tab>
                        <Tab>Additional Information</Tab>
                        <Tab>Customer Feedback</Tab>
                    </TabList>

                    <TabPanel className="text-start">
                        <div className="flex justify-between">
                            <h2 className="w-1/2">Any content 1</h2>
                            <div className="relative w-1/2" >
                                <iframe width="420" height="315"
                                    src="https://youtu.be/J7a9MLbpqZ4?si=qGigpmOY9POYH6jK">
                                </iframe>
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel className="text-start">
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel className="text-start">
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Itemdetails;