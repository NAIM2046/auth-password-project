import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Home = () => {
    const authInfo = useContext(AuthContext) ;
    console.log(authInfo)
    return (
        <div>
            <h1>this is home {authInfo.name}</h1>
        </div>
    );
};

export default Home;