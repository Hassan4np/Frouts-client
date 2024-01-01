
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../Hooks.jsx/useAuth';
import { useState } from 'react';
import useAxousPublic from '../Hooks.jsx/useAxousPublic';


const Signup = () => {
    const { UserSignup } = useAuth();
    const loc = useLocation();
    const navagater = useNavigate()
    const [show, setshow] = useState(false)
    const [shows, setshows] = useState(false)
    const [error, seterror] = useState('');
    const axouPublic = useAxousPublic();
    const handlesignup = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password1 = from.password1.value;
        const Password2 = from.ConfirmPassword2.value;
        seterror('')
        if (password1 !== Password2) {
            return seterror('password is not match')
        }
        UserSignup(email, password1)
            .then(res => {
                console.log(res.user);
                axouPublic.post('/users', email)
                    .then(res => {
                        console.log(res.data)
                    })

                    navagater(loc.state?loc.state:"/login")
                    .catch(error => {
                        console.log(error)
                    })


            }).catch(error => {
                seterror(error.message)
            })
    }

    return (
        <div>
            <div className="hero-content">

                <div className="card shrink-0 w-full h-[500px] md:w-[520px] md:h-[500px] shadow-2xl  bg-[#F2F2F2] mt-5">
                    <h1 className="text-3xl text-center font-semibold pt-3">Create Account</h1>
                    <form className="card-body -mt-5" onSubmit={handlesignup}>
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
                            <input type={`${show ? 'text' : 'password'}`} placeholder="password" name="password1" className="input input-bordered" required />
                            {
                                show ? <FaEye onClick={() => setshow(!show)} className="absolute top-14 right-4"></FaEye> :
                                    <FaEyeSlash onClick={() => setshow(!show)} className="absolute top-14 right-4"></FaEyeSlash>
                            }
                        </div>
                        <div className="form-control relative ">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type={`${shows ? 'text' : 'password'}`} placeholder="Confirm Password" name="ConfirmPassword2" className="input input-bordered" required />
                            {
                                shows ? <FaEye onClick={() => setshows(!shows)} className="absolute top-14 right-4"></FaEye> :
                                    <FaEyeSlash onClick={() => setshows(!shows)} className="absolute top-14 right-4"></FaEyeSlash>
                            }
                            <div className='flex mt-2'>
                                <form className='flex'>
                                    <input type="checkbox" className=" mr-2 " />
                                    <p className='text-[14px] font-normal text-gray-500'>Accept all terms & Conditions</p>
                                </form>
                            </div>

                            {
                                error && <p className="text-[14px] font-normal text-red-500 ml-1">{error}</p>
                            }
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