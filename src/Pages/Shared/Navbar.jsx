import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContex';
import jobicon from '../../assets/Lottie/favicon.png'

const Navbar = () => {
  const {user,signoutUser} = useContext(AuthContext)
  const handleSignOut = ()=>{
    signoutUser()
    .then(
      console.log('signOut succefully')
    )
    .catch(err =>{
      console.log(' failed to logout',err);
    })
  }
    const links = <>
    <Link>home</Link>
    <Link>blog</Link>
    <Link>contact</Link>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src={jobicon} alt="" /> <h3>Job Portal</h3></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    {
      user ? <> <Link onClick={handleSignOut} className="btn bg-blue-600">logout</Link></>  : <> <Link to={'/register'} className="underline">Register</Link>
      <Link to={'/login'} className="btn bg-blue-600">SignIn</Link></> 
    }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;