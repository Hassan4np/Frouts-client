
import products from "../../../assets/menus/p1.png";
const Carosolsection = () => {

    return (
        <div >
            <div className="carousel h-[800px] w-full">
                <div id="item1" className="carousel-item w-full relative">
                  
                    <div className="absolute  p-6 bg-gradient-to-r bg-[#EDF2EE] h-full w-full rounded-md ">
                        <div className="top-1/4  absolute space-y-5 flex ">
                            <div className="px-10 space-y-3 mt-16 w-1/2">
                                <p className="text-base font-medium text-green-500">Welcome to shopery</p>
                                <h1 className="lg:text-7xl text-4xl font-semibold text-black" >Fresh & Healthy
                                     <br /> Organic Food</h1>
                                     <h6 className="text-3xl font-semibold">Sale up to <span className="text-[#FF8A00]">30% OFF</span></h6>
                                <p className="text-base font-normal text-black">Free shipping on all your order. we deliver, you enjoy</p>
                                <div className="mt-5 ">
                                    <button className="btn bg-green-500 rounded-2xl px-4 py-3 ">shop now</button>
                                
                                </div>
                            </div>
                            <div className="w-1/2 ">
                                <img src={products} alt="" className="w-[800px]  h-[480px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full relative">
                <div className="absolute  p-6 bg-gradient-to-r bg-[#EDF2EE] h-full w-full rounded-md ">
                        <div className="top-1/4  absolute space-y-5 flex ">
                            <div className="px-10 space-y-3 mt-16 w-1/2">
                                <p className="text-base font-medium text-green-500">Welcome to shopery</p>
                                <h1 className="lg:text-7xl text-4xl font-semibold text-black" >Fresh & Healthy
                                     <br /> Organic Food</h1>
                                     <h6 className="text-3xl font-semibold">Sale up to <span className="text-[#FF8A00]">30% OFF</span></h6>
                                <p className="text-base font-normal text-black">Free shipping on all your order. we deliver, you enjoy</p>
                                <div className="mt-5 ">
                                    <button className="btn bg-green-500 rounded-2xl px-4 py-3 ">shop now</button>
                                
                                </div>
                            </div>
                            <div className="w-1/2 ">
                                <img src={products} alt="" className="w-[800px]  h-[480px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full relative">
                <div className="absolute  p-6 bg-gradient-to-r bg-[#EDF2EE] h-full w-full rounded-md ">
                        <div className="top-1/4  absolute space-y-5 flex ">
                            <div className="px-10 space-y-3 mt-16 w-1/2">
                                <p className="text-base font-medium text-green-500">Welcome to shopery</p>
                                <h1 className="lg:text-7xl text-4xl font-semibold text-black" >Fresh & Healthy
                                     <br /> Organic Food</h1>
                                     <h6 className="text-3xl font-semibold">Sale up to <span className="text-[#FF8A00]">30% OFF</span></h6>
                                <p className="text-base font-normal text-black">Free shipping on all your order. we deliver, you enjoy</p>
                                <div className="mt-5 ">
                                    <button className="btn bg-green-500 rounded-2xl px-4 py-3 ">shop now</button>
                                
                                </div>
                            </div>
                            <div className="w-1/2 ">
                                <img src={products} alt="" className="w-[800px]  h-[480px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                <div className=" z-10 p-6 bg-gradient-to-r bg-[#EDF2EE] h-full w-full rounded-md  relative">
                        <div className="top-1/4  absolute space-y-5 flex ">
                            <div className="px-10 space-y-3 mt-16 w-1/2">
                                <p className="text-base font-medium text-green-500">Welcome to shopery</p>
                                <h1 className="lg:text-7xl text-4xl font-semibold text-black" >Fresh & Healthy
                                     <br /> Organic Food</h1>
                                     <h6 className="text-3xl font-semibold">Sale up to <span className="text-[#FF8A00]">30% OFF</span></h6>
                                <p className="text-base font-normal text-black">Free shipping on all your order. we deliver, you enjoy</p>
                                <div className="mt-5 ">
                                    <button className="btn bg-green-500 rounded-2xl px-4 py-3 ">shop now</button>
                                
                                </div>
                            </div>
                            <div className="w-1/2 ">
                                <img src={products} alt="" className="w-[800px]  h-[480px]" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2 mt-10 ">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Carosolsection;