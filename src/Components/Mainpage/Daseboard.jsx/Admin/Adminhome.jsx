
import useAuth from '../../Hooks.jsx/useAuth';

const Adminhome = () => {
    const { user } = useAuth();
    return (
        <div className='flex ml-20 py-5'>
            <div className='text-center'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        {/* <img src={user?.photoURL} /> */}
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" ></img>
                    </div>
                </div>
                <h1>{user?.displayName} hassasn</h1>
            </div>
        </div>
    );
};

export default Adminhome;