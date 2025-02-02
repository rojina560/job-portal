import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import rregisterLottieData from '../../assets/Lottie/register.json'
import AuthContext from '../../Context/AuthContext/AuthContex';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [success, setSuccess] = useState(false);
    const [error,setError] = useState('')
  const handleRegister = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      email,password
    }
    console.log(user);
    // reset error status 
    setError('')
    setSuccess(false)
    // password validation 
    if(password.length < 6){
      setError('password should at least 6 character or long')
      return
    }
   
    const passValidation = /^(?=.*[A-Z])(?=.*\d).$/;
if (!passValidation.test(password)) {
  setError('Password must be at least 6 characters long and include at least one uppercase letter and one number.');
  return;
}

    //  
    createUser(email,password)
    .then(result =>{
        console.log(result.user);
        setSuccess(true)
    })
    .catch(err =>{
        console.log(err.message);
        setError(err.message)
        setSuccess(false)
    })
  }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
     
      <Lottie animationData={rregisterLottieData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-3xl font-bold text-center pt-3">Register now!</h1>
      <form onSubmit={handleRegister} className="card-body">
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      {error && <p className='text-red-600 text-center pb-3'>{error}</p>}
      {
        success && <p className='text-green-500 text-center pb-3'> Sign up successfully..</p>
      }
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;