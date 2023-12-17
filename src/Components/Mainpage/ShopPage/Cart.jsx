import { useQuery } from "@tanstack/react-query";


import useAxousSecret from "../Hooks.jsx/useAxousSecret";
import Swal from "sweetalert2";
import { useState } from "react";
import useCards from "../Hooks.jsx/useCards";
import { Link } from "react-router-dom";
import useAuth from "../Hooks.jsx/useAuth";


const Cart = () => {
    const { user } = useAuth();
    const [cards, refetch] = useCards(user?.email);
    console.log(cards)
    const [quantity, setquantity] = useState(1);

    const axoussecrt = useAxousSecret();
   
    const handledelete = (id) => {
        console.log(id)
        axoussecrt.delete(`/cards/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `Your item successfully deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch()

            })
            .catch(error => {
                console.log(error)
            })
    }
    console.log(quantity)
    const totalprice = cards?.reduce((total, current) => total + current.price, 0).toFixed(2);
    console.log(totalprice)
    return (
        <div className="min-h-[200px] py-10">
            <h1 className="text-3xl font-semibold text-black text-center py-5">My Shopping Cart</h1>
            <div className="flex gap-4">
                <div className="w-3/4">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="border">
                                <tr className="uppercase">
                                    <th >Priduct</th>
                                    <th>Price</th>

                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cards?.map(it => <tr key={it?._id} className="border mb-1">
                                        <td className="">
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={it?.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{it?.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            ${it.price}

                                        </td>

                                        <th>
                                            <button onClick={() => handledelete(it?._id)} className="btn text-red-500 btn-sm">x</button>
                                        </th>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className=" h-[250px] border px-5 ">
                        <h4 className="text-xl font-medium py-2">Cart Total</h4>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <p className="text-[14px] font-medium text-[#4D4D4D]">Subtotal</p>
                                <p className="text-[14px] font-medium text-[#1A1A1A]" >${totalprice}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-[14px] font-medium text-[#1A1A1A]">sopping</p>
                                <p className="text-[14px] font-medium text-[#1A1A1A]" >free</p>
                            </div>
                            <hr />
                            <div className="flex justify-between">
                                <p className="text-base font-medium text-[#1A1A1A]">total</p>
                                <p className="text-base font-medium text-[#1A1A1A]" >${totalprice}</p>
                            </div>
                            <div className="py-4">
                                {
                                    cards?.length > 0 ? <Link to="/checkout">  <button className="btn text-base font-semibold rounded-3xl text-white bg-green-500 mt-2 w-full">Proceed to checkout</button></Link> :
                                          <button disabled className="btn text-base font-semibold rounded-3xl text-white bg-green-500 mt-2 w-full">Proceed to checkout</button>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;