import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import hammerAndSaw from '../../Assets/buttonIcons/hammerAndSaw.png'

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');


    };

    const menuItem = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
        <li><Link to="/myportfolio">MyPortfolio</Link></li>
        <li>
            {
                user && <Link to={'/dashboard'}>Dashboard</Link>
            }
        </li>
        <li>{
            user ? <button onClick={() => logout()} className="btn btn-ghost">Sign Out</button> :
                <Link to="/login">Login</Link>}
        </li>


    </>

    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to={"/home"} class="btn btn-ghost normal-case text-xl">
                        <img src={hammerAndSaw} alt="" />
                        <span className='ml-2'>Hammer and Saw</span></Link>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end lg:hidden ">
                    <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Navbar;