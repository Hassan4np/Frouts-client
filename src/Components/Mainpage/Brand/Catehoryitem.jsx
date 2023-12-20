import { useQuery } from "@tanstack/react-query";
import useAxousPublic from "../Hooks.jsx/useAxousPublic";
import { Link, useParams } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import Rating from "react-rating";
import { MdOutlineStarOutline } from "react-icons/md";
import { FaStar } from "react-icons/fa";


const Catehoryitem = () => {
    const { id } = useParams();
    const axousPublic = useAxousPublic();
    const { refetch, data: categorys, isLoading } = useQuery({
        queryKey: ['Products', id],
        queryFn: async () => {
            const res = await axousPublic.get(`/products/category/${id}`);
            return res.data
        }
    })
    console.log(id)
    console.log(categorys)
    if (isLoading) {
        return <div className="text-center my-10"> <span className="loading loading-ring text-green-600 loading-lg"></span></div>
    }
    return (
        <div>
            <h1 className="text-5xl text-center py-10 text-black">{id}</h1>
            <hr className="border-1 text-black" />
            <div className="w-full py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {
                        categorys?.map(item => <Link key={item.name} to={`/itemdetails/${item._id}`}><div id='shopid' className="group hover:border-green-500 card w-[312px] h-[406px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
                            <figure className="px-10 h-[312px] w-[302px] p-5">
                                <img src={item.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title text-[14px] font-normal shoptitle text-[#4D4D4D]">{item.name}</h2>
                                <div className="flex justify-between">
                                    <p className="text-[16px] font-medium">${item.price}</p>
                                    <IoBagHandleOutline className="text-2xl shopticone group-hover:text-green-500 "></IoBagHandleOutline>
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
    );
};

export default Catehoryitem;