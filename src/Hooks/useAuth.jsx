import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContex';

const useAuth = () => {
    const context = useContext(AuthContext)
    return context;
};

export default useAuth;