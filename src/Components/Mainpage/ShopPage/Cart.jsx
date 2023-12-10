import c from "../../../assets/menus/Image (18).png"
import c1 from "../../../assets/menus/Image (4).png"

const Cart = () => {
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
                                    <th>Quantity</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border mb-1">
                                    <td className="">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={c} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Tmaato</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $56

                                    </td>
                                    <td>5</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">x</button>
                                    </th>
                                </tr>
                                <tr className="border mb-1">
                                    <td className="">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={c1} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Palon</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $158

                                    </td>
                                    <td>5</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">x</button>
                                    </th>
                                </tr>
                                {/* -------- */}



                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className=" h-[200px] border px-5 ">
                        <h4 className="text-xl font-medium p-4">Cart Total</h4>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <p className="text-[14px] font-medium text-[#4D4D4D]">Subtotal</p>
                                <p className="text-[14px] font-medium text-[#1A1A1A]" >$96.00</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-[14px] font-medium text-[#1A1A1A]">sopping</p>
                                <p className="text-[14px] font-medium text-[#1A1A1A]" >free</p>
                            </div>
                            <hr />
                            <div className="flex justify-between">
                                <p className="text-base font-medium text-[#1A1A1A]">total</p>
                                <p className="text-base font-medium text-[#1A1A1A]" >$100.30</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;