import React from 'react';
import '../footer/footer.css'
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='block__footer'>
       
            <p>Footer &copy; SAID</p> 
       <div className='block__footer-web'>
            <a  href="https://www.instagram.com/lans_sd/"><img className='insta'  src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png"  alt=""  /></a>
            <a  href="https://web.telegram.org/k/#@SoBoring"><img className='telega' src="https://1000logos.net/wp-content/uploads/2021/04/Telegram-logo.png"  alt="" /></a>
            </div>
        </div>
    );
};

export default Footer;