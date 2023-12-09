
import p1 from "../../../assets/category/fruits 1.png"
import p2 from "../../../assets/category/fish 1.png"
import p3 from "../../../assets/category/meat 1.png"
import p4 from "../../../assets/category/snacks 1 (1).png"
import p5 from "../../../assets/category/Vegetable.png"
import p6 from "../../../assets/category/soft-drink 1.png"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
const Category = () => {
    return (
        <div className="py-10">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                // pagination={{
                //     clickable: false,
                // }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="">
                    <div className="h-[210px] w-[200px] border  border-emerald-700">
                        <div className="w-[80px] h-[80px] mx-auto "  >
                            <img src={p5} alt="" className="pt-8" />
                        </div>
                        <div className="text-center pt-7">
                            <h1 className="text-[18px] font-medium text-green-500">vegetables</h1>
                            <p className="text-[14px] font-normal text-[#808080]">Products</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="h-[210px] w-[200px] border">
                        <div className="w-[80px] h-[80px] mx-auto "  >
                            <img src={p2} alt="" className="pt-8" />
                        </div>
                        <div className="text-center pt-7">
                            <h1 className="text-[18px] font-medium text-green-500">River Fish</h1>
                            <p className="text-[14px] font-normal text-[#808080]">Products</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="h-[210px] w-[200px] border">
                        <div className="w-[80px] h-[80px] mx-auto "  >
                            <img src={p3} alt="" className="pt-8" />
                        </div>
                        <div className="text-center pt-7">
                            <h1 className="text-[18px] font-medium text-green-500">Meat</h1>
                            <p className="text-[14px] font-normal text-[#808080]">Products</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="h-[210px] w-[200px] border">
                        <div className="w-[80px] h-[80px] mx-auto "  >
                            <img src={p4} alt="" className="pt-8" />
                        </div>
                        <div className="text-center pt-7">
                            <h1 className="text-[18px] font-medium text-green-500">Snacks</h1>
                            <p className="text-[14px] font-normal text-[#808080]">Products</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="h-[210px] w-[200px] border">
                        <div className="w-[80px] h-[80px] mx-auto "  >
                            <img src={p1} alt="" className="pt-8" />
                        </div>
                        <div className="text-center pt-7">
                            <h1 className="text-[18px] font-medium text-green-500">Fresh Fruit</h1>
                            <p className="text-[14px] font-normal text-[#808080]">Products</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="h-[210px] w-[200px] border">
                        <div className="w-[80px] h-[80px] mx-auto "  >
                            <img src={p6} alt="" className="pt-8" />
                        </div>
                        <div className="text-center pt-7">
                            <h1 className="text-[18px] font-medium text-green-500">Water and Drinks</h1>
                            <p className="text-[14px] font-normal text-[#808080]">Products</p>
                        </div>
                    </div>
                </SwiperSlide>             
            </Swiper>
        </div>
    );
};

export default Category;