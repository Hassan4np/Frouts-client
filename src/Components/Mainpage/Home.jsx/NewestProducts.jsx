
import p1 from "../../../assets/menus/Image (8).png"
import p2 from "../../../assets/menus/Image (6).png"


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { IoBagHandleOutline } from "react-icons/io5"
import { MdOutlineStarOutline } from "react-icons/md"
import { FaStar } from "react-icons/fa"
import Rating from "react-rating"
const NewestProducts = () => {
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
                <div className="card w-[248px] h-[339px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
                    <figure className="px-10 h-[246px] w-[246px] pt-10">
                        <img src={p1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-[14px] font-normal text-[#4D4D4D]">Apple</h2>
                        <div className="flex justify-between">
                            <p className="text-[16px] font-medium">$125</p>
                            <IoBagHandleOutline className="text-2xl"></IoBagHandleOutline>
                        </div>
                        <Rating className="text-[#FF6A00]"
                            placeholderRating={3.5}
                            emptySymbol={<MdOutlineStarOutline />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        />
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="">
                <div className="card w-[248px] h-[339px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
                    <figure className="px-10 h-[246px] w-[246px] pt-10">
                        <img src={p2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-[14px] font-normal text-[#4D4D4D]">Chanise Cabbage</h2>
                        <div className="flex justify-between">
                            <p className="text-[16px] font-medium">$15</p>
                            <IoBagHandleOutline className="text-2xl"></IoBagHandleOutline>
                        </div>
                        <Rating className="text-[#FF6A00]"
                            placeholderRating={4}
                            emptySymbol={<MdOutlineStarOutline />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        />
                    </div>
                </div>
                </SwiperSlide>
             
                
               
                           
            </Swiper>
        </div>
    );
};

export default NewestProducts;