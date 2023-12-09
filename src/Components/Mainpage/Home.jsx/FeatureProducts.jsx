import { useEffect, useState } from "react";
import Rating from "react-rating";
import { MdOutlineStarOutline } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";



const FeatureProducts = () => {
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {
                data.map(item => <div key={item.name} className="card w-[248px] h-[339px] bg-base-100 shadow-xl border mt-5 bg-[#E6E6E6)]">
                    <figure className="px-10 h-[246px] w-[246px] pt-10">
                        <img src={item.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-[14px] font-normal text-[#4D4D4D]">{item.name}</h2>
                        <div className="flex justify-between">
                            <p className="text-[16px] font-medium">${item.price}</p>
                            <IoBagHandleOutline className="text-2xl"></IoBagHandleOutline>
                        </div>
                        <Rating className="text-[#FF6A00]"
                            placeholderRating={item.rating}
                            emptySymbol={<MdOutlineStarOutline />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        />
                    </div>
                </div>)
            }
        </div>
    );
};

export default FeatureProducts;