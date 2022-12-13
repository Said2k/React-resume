import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import InfoApp from '../Info/InfoApp';

const MainRouter = ({state, colInfo}) => {
    return (
        <Routes>
            <Route path='/' element={<Home state={state}/>}/>
            <Route path='information' element={<InfoApp colInfo={colInfo}/>}/>
           
           </Routes> 
            );
};

export default MainRouter;