import React, { useContext } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';



const Home = () => {

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>


        </div>
    );
};

export default Home;