
import HeaderBannar from '../Global/HeaderBannar';
import b from "../../../assets/category/daseboard.png"
import { Link, Outlet } from 'react-router-dom';
import { FaAd, FaCalendar, FaList } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useAuth from '../Hooks.jsx/useAuth';

const Daseboard = () => {
    const {UserLogout} = useAuth();
    const isAdmin = false;
    const hangellogout=()=>{
        UserLogout()
        .then(res=>{
            console.log(res.user)
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className='min-h-[400px]'>
            <HeaderBannar imgg={b}></HeaderBannar>
            <div className='flex'>
                <div className='min-h-[418px]  w-80 px-5 py-5  h-[48px]'>
                    {
                        isAdmin ? <>
                            <ul className="menu p-2">
                                <li className=" border bg-white text-[#666] font-normal rounded-md  text-base"><Link to="/daseboard/adminhome"><FaCalendar></FaCalendar>Profile</Link></li>
                            </ul>
                            <ul className="menu p-2">
                                <li className=" border bg-white text-[#666] font-normal rounded-md  text-base"><Link to="/daseboard/itemmange"><FaCalendar></FaCalendar>Manage Item</Link></li>
                            </ul>
                            <ul className="menu p-2">
                                <li className=" border bg-white text-[#666] font-normal rounded-md  text-base"><Link to="/daseboard/usersmanage"><FaAd></FaAd>Manage user</Link></li>
                            </ul>
                          
                        </> : <div >
                            <ul className="menu p-2">
                                <li className=" border bg-white rounded-md font-normal text-[#666]  text-base"><Link to="/daseboard/userhome"><AiOutlineShoppingCart></AiOutlineShoppingCart>MyProfile</Link></li>
                            </ul>
                            <ul className="menu p-2">
                                <li className=" border bg-white rounded- font-normal text-[#666]  text-base"><Link to="/daseboard/orders"><FaCalendar></FaCalendar>Orders</Link></li>
                            </ul>
                            <ul className="menu p-2">
                                <li className=" border bg-white rounded- font-normal text-[#666]  text-base"><Link to="/daseboard/carts"><FaAd></FaAd>Shopping cart</Link></li>
                            </ul>
                            <ul className="menu p-2">
                                <li className=" border bg-white rounded- font- text-[#666]  text-base"><Link to="/daseboard/setting"><FaList></FaList>Setting</Link></li>
                            </ul>
                        </div>

                    }
                    <ul className="menu p-2" onClick={hangellogout}>
                        <li className=" border bg-white rounded-md  text-base text-[#]"><button><FaList></FaList>logout</button></li>
                    </ul>
                </div>
                <div className='my-5 w-4/5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default Daseboard;