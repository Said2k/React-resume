import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import InfoApp from '../Info/InfoApp';

const MainRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='information' element={<InfoApp/>}/>
           
           </Routes> 
            );
};

export default MainRouter;