import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarCustom from './components/Navbar/Navbar';
import MainRouter from './components/MainRouter/MainRouter';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
       <BrowserRouter>
       <NavbarCustom/>
      <MainRouter/>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
};

export default App;