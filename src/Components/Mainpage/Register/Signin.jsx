import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";


const Signin = () => {
    return (
        <div>
            <div>
                <div className="hero-content">
                 
                    <div className="card shrink-0 w-full h-[400px] md:w-[520px] md:h-[400px] shadow-2xl  bg-[#F2F2F2] mt-5">
                        <h1 className="text-3xl text-center font-semibold pt-3">Login</h1>
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

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                
                                </label>
                                <p className="text-[14px] font-normal text-red-500 ml-1">error</p>
                            </div>
                            <div className="form-control">
                                <button className="btn bg-green-500 text-white">Login</button>
                            </div>
                            <p className="text-[#666] text-[14px] font-normal text-center">Don’t have account?<Link to="/signup"><span className="text-base font-normal text-green-500 ml-1">Register</span></Link></p>
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
