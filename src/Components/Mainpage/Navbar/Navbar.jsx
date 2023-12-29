import logo from "../../../assets/pageimg/Logo.png"
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { TbPhoneCall } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import useAuth from "../Hooks.jsx/useAuth";
import useCards from "../Hooks.jsx/useCards";

const Navbar = () => {
    const { user, UserLogout } = useAuth();
    const [cards, refetch] = useCards(user?.email);
    const hangellogout = () => {
        UserLogout()
            .then(res => {
                console.log(res.user)
            }).catch(error => {
                console.log(error)
            })
    }
    const totalprice = cards?.reduce((total, current) => total + current.price, 0).toFixed(2);
    refetch()
    return (
        <div>
            <div className="flex justify-around mt-5">
                <img src={logo} alt="" />
                <div className="" >
                    <form className="">
                        <input className="w-[400px] py-[9px] px-4 border " type="text" placeholder="search" />
                        <button className="btn  bg-green-500 py-4 px-6 -ml-[1px]">Search </button>
                    </form>
                </div>
                <div className="flex mt-2">
                    <div className="flex">
                        <IoIosHeartEmpty className="text-4xl " />
                        <div className="px-2 text-2xl">|</div>
                    </div>
                    <div className="flex relative">
                        <div className="text-2xl  flex "><AiOutlineShopping className="text-4xl z-10" />
                            <span className="badge absolute text-lg font-bold text-green-400 -top-3">+{cards?.length}</span></div>
                        <div className="ml-5">
                            <p className="text-[11px] font-normal text-[#4D4D4D]">shopping cart</p>
                            <p className="text-[14px] font-medium text-black">${totalprice}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------------------- */}
            <div className="navbar font-medium mt-12 text-[#999] px-14 h-[60px] bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/"> <li><a>Home</a></li></NavLink>
                            <NavLink to="/shop"> <li><a>Shop</a></li></NavLink>

                            <NavLink to="/cart"> <li><a>My Cart</a></li></NavLink>
                            {
                                user && <NavLink to="/daseboard/userhome"> <li><a>Daseboard</a></li></NavLink>
                            }
                               {
                                user ? <button  onClick={hangellogout}><li><a>logout</a></li></button  > : <NavLink to="/login" > <li><a>Login</a></li></NavLink>
                            }

                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <NavLink to="/"> <li><a>Home</a></li></NavLink>
                            <NavLink to="/shop"> <li><a>Shop</a></li></NavLink>

                            <NavLink to="/cart"> <li><a>My Cart</a></li></NavLink>
                            {
                                user && <NavLink to="/daseboard/userhome"> <li><a>Daseboard</a></li></NavLink>
                            }
                         

                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <TbPhoneCall className="text-2xl" />
                    <p className="text-base font-medium mr-2">+801723461543</p>
                    {
                        user ? <button className="px-3 py-1 text-black font-bold bg-white rounded-xl hidden lg:block" onClick={hangellogout}><a>logout</a></button  > : <NavLink to="/login" className='px-3 hidden lg:block py-1 text-black font-bold bg-white rounded-xl'> <a>Login</a></NavLink>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;