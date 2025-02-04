import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import LoginLottieData from '../../assets/Lottie/login.json';
import AuthContext from '../../Context/AuthContext/AuthContex';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('in signIn page',location);
    const from = location.state || '/';
const handlleLogin = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      email,password
    }
    console.log(user);
    signInUser(email,password)
    .then(result =>{
        console.log('sign in',result.user);
        navigate(from)
    })
    .catch(err =>{
        console.log(err);
    })
}


    return (


        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
     
      <Lottie animationData={LoginLottieData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-3xl font-bold text-center pt-3">Login now!</h1>
      <form onSubmit={handlleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;