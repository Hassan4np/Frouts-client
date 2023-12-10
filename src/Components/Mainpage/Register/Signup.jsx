
import { FaEye } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div>
            <div className="hero-content">

                <div className="card shrink-0 w-full h-[500px] md:w-[520px] md:h-[500px] shadow-2xl  bg-[#F2F2F2] mt-5">
                    <h1 className="text-3xl text-center font-semibold pt-3">Create Account</h1>
                    <form className="card-body -mt-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control relative ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <FaEye className="absolute top-14 right-4"></FaEye>
                        </div>
                        <div className="form-control relative ">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm Password" name="ConfirmPassword" className="input input-bordered" required />
                            <FaEye className="absolute top-14 right-4"></FaEye>
                            <div className='flex mt-2'>
                                <input type="checkbox" checked="checked" className="checkbox checkbox-sm mr-2 " />
                                <p className='text-[14px] font-normal text-gray-500'>Accept all terms & Conditions</p>
                            </div>

                            <p className="text-[14px] font-normal text-red-500 ml-1">error</p>
                        </div>
                        <div className="form-control">
                            <button className="btn bg-green-500 text-white">Create Account</button>
                        </div>
                        <p className="text-[#666] text-[14px] font-normal text-center">Already have account<Link to="/login"><span className="text-base font-normal text-green-500 ml-1">Login</span></Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Signup;