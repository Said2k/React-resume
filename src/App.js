import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarCustom from './components/Navbar/Navbar';
import MainRouter from './components/MainRouter/MainRouter';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import white from '../src/components/Home/abstract-smooth-empty-grey-studio-well-use-as-background-business-report-digital-website-template-backdrop.jpg'
import black from '../src/components/Home/sep09.jpg'

const App = () => {
  let [state,setState] = useState(white)
  let [colInfo, setColInfo]= useState('beige')

    
  function darkState(){
      setState(black)
      setColInfo("gray")
      console.log(state);
  }
  function lightState(){
          setState(white)
          setColInfo("beige")
      }
  function darkStateInfo(){
      setColInfo('gray')
      // console.log(state);
  }
  function lightStateInfo(){
          setColInfo('beige')
      }
  return (
    <div>
       <BrowserRouter>
       <NavbarCustom darkState={darkState} lightState={lightState}/>
      <MainRouter state={state}colInfo={colInfo}/>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
};

export default App;