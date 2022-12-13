import React from 'react';
import '../footer/footer.css'
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='block__footer'>
       
            <p>Footer &copy; SAID</p> 
       <div className='block__footer-web'>
            <a href="https://www.instagram.com/lans_sd/"><img src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png" width={"100px"} height={"70px"} alt=""  /></a>
            <a href="https://web.telegram.org/k/#@SoBoring"><img src="https://1000logos.net/wp-content/uploads/2021/04/Telegram-logo.png" width={"100px"} height={"60px"} alt="" /></a>
            </div>
        </div>
    );
};

export default Footer;