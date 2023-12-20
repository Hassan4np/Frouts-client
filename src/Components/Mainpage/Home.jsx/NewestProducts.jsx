
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
import useAllProducts from "../Hooks.jsx/useAllProducts";
import { Link } from "react-router-dom";


const NewestProducts = () => {
    const [alldata, isPending, refetch] = useAllProducts();
    if (isPending) {
        return <div className="text-center my-10"> <span className="loading loading-ring text-green-600 loading-lg"></span></div>
    }
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
                {
                    alldata?.map(item => <SwiperSlide key={item._id} className="">
                        <Link to={`/itemdetails/${item._id}`} >
                            <div className=" group hover:border-green-500  card w-[248px] h-[339px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
                                <figure className="px-10 h-[246px] w-[246px] pt-10">
                                    <img src={item?.img} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title text-[14px] font-normal text-[#4D4D4D]">{item?.name}</h2>
                                    <div className="flex justify-between">
                                        <p className="text-[16px] font-medium">${item?.price}</p>
                                        <IoBagHandleOutline className="text-2xl group-hover:text-green-500"></IoBagHandleOutline>
                                    </div>
                                    <Rating className="text-[#FF6A00]"
                                        placeholderRating={item?.rating}
                                        emptySymbol={<MdOutlineStarOutline />}
                                        placeholderSymbol={<FaStar />}
                                        fullSymbol={<FaStar />}
                                    />
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default NewestProducts;