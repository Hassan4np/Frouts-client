
import { useState } from 'react';

import Swal from "sweetalert2";
import useCards from "../Hooks.jsx/useCards";
import useAxousSecret from "../Hooks.jsx/useAxousSecret";
import useAuth from '../Hooks.jsx/useAuth';


const Checkout = () => {
    const {user} = useAuth();
    const [cards,refetch] = useCards(user?.email);
    const axoussecrt = useAxousSecret();

    console.log(cards?.length)
    const totalprice = cards?.reduce((total, current) => total + current.price, 0).toFixed(2);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        sub: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    console.log(formData)
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData)
        if (cards.length > 0) {
            const ordersinfo = {
                cardsid: cards.map(item => item?._id),
                itemid: cards.map(item => item?.itemid),
                useringfo: formData,
                totalPrice: totalprice,
                email:user?.email,
                status:"pending"
    
            }
            console.log(ordersinfo)
            axoussecrt.post('/orders', ordersinfo)
                .then(res => {
                    console.log(res.data)
                    if(res.data.orders.insertedId){
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: `Your order successfully `,
                            showConfirmButton: false,
                            timer: 1500
                          });
                          
                    }
                    refetch()
                }).catch(error => {
                    console.log(error)
                })
        }
       
    };

    return (
        <form onSubmit={handleSubmit} className="min-h-screen">
            <div className=" bg-[#EDF2EE]" id="contact">
                <h1 className='text-5xl font-bold text-center text-green-500 py-5'>Checkout</h1>
                <div className="lg:flex ">
                    <div className="p-10 w-full lg:w-1/2 flex-1 " data-aos="flip-left">
                        <div className="bg-gradient-to-r  to-green-500 from-green-300 rounded-md p-5">
                            <h1 className="text-center text-2xl font-bold">Billing Adress</h1>
                            <div className="md:flex lg:space-x-4 gap-1">
                                <div className="form-control md:w-1/2 ">
                                    <label className="label">
                                        <span className="label-text text-xl lg:text-2xl">Enter Name</span>
                                    </label>
                                    <label className="input-group ">
                                        <input
                                            type="text"
                                            placeholder="name"
                                            required name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="input input-bordered w-full" />

                                    </label>
                                </div>
                                <div className="form-control md:w-1/2 ">
                                    <label className="label">
                                        <span className="label-text text-xl lg:text-2xl">Enter email</span>
                                    </label>
                                    <label className="input-group">
                                        <input
                                            type="emai"
                                            placeholder="Email"
                                            required name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            <div className="md:flex lg:space-x-4 gap-1">
                                <div className="form-control md:w-1/2 ">
                                    <label className="label">
                                        <span className="label-text  text-xl lg:text-2xl">Enter City</span>
                                    </label>
                                    <label className="input-group ">
                                        <input
                                            type="text"
                                            placeholder="City"
                                            name="sub"
                                            value={formData.sub}
                                            onChange={handleChange}
                                            className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control md:w-1/2 ">
                                    <label className="label">
                                        <span className="label-text text-xl lg:text-2xl">Enter Phone</span>
                                    </label>
                                    <label className="input-group">
                                        <input
                                            type="text"
                                            placeholder="Phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-control md:full ">
                                <label className="label">
                                    <span className="label-text text-xl  lg:text-2xl">Write Address</span>
                                </label>
                                <label className="input-group">
                                    <textarea className="textarea textarea-bordered w-full"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Enter massage"></textarea>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 min-h-[500px]">
                        {
                            cards?.map(item => <div key={item._id} className="flex justify-between mb-1 ">
                                <div className="flex ">
                                    <div className=" mr-2">
                                        <div className="w-10 border rounded-full">
                                            <img src={item.img} />
                                        </div>
                                    </div>
                                    <h1 className="text-[14px] mt-2 font-normal">{item.name}</h1>
                                </div>
                                <h1 className="text-[14px] font-normal pr-10">${item.price}</h1>
                            </div>)
                        }
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
                                <div>
                                    <h1 className="text-xl font-medium">Payment Method</h1>
                                </div>
                                <div className="py-4">
                                    <input type="submit" value="Cash on Delivery" className="w-full mt-5 p-3 rounded-lg font-bold text-xl text-gradient bg-gradient-to-r  from-green-500 to-green-300" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Checkout;