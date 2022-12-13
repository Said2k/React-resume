import React, { useState } from 'react';
import '../Home/home.css'
import me from '../Home/photo_2022-10-12_12-09-49.jpg'
import white from '../Home/abstract-smooth-empty-grey-studio-well-use-as-background-business-report-digital-website-template-backdrop.jpg'
import black from '../Home/sep09.jpg'




const Home = ({state}) => {
console.log(state);
    return (
        <div  className='block' style={{backgroundImage: `url(${state})`}}>
            <div className='block-about'>
            <div className='block__name'><p>Лансаров Саид</p></div>
            <div className='block__photo'>
                <img src={me} alt="" />
            <div className='block__info'>
                <p>Данные:</p>
                <div>
                <span> <strong>Рост :</strong> 183 см
                   <br/> <strong>Нацианальность :</strong> VIP dungan
                   <br/> <strong>Номер :</strong> 0703899595
                   <br/><strong>email :</strong> lansarov2001@mail.ru

                </span>
                </div>
            </div>
            </div>

            
            </div>
            
          
        </div>
    );  
};

export default Home;