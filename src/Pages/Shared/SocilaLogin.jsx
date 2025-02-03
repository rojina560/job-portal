
import React from 'react';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContex';


const SocilaLogin = () => {
    const {signInWithGoggle} = useContext(AuthContext)
    const handleGoggle = ()=>{
        signInWithGoggle()
        .then(result =>{
            console.log(result.user);
        })
        .catch( error =>{
            console.log(error.message);
        })
    }
    return (
        <div className='text-center pb-5'>
            <div className="text-center pb-5">OR</div>
            <button className='text-yellow-600 text-4xl underline' onClick={handleGoggle}>Goggle</button>
        </div>
    );
};

export default SocilaLogin;