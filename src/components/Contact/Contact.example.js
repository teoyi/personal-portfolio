import React, { useEffect } from 'react'
import classes from '../../styles/Contact.module.css'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Contact = () => {

    return ( 
        <div className={classes.contact} id="contact">
            <h1 data-aos="fade-right" className={classes.title}>Get in touch</h1>
            <p data-aos="fade-left" className={classes.contactContent}>
                If you would like to get in touch with me about project collaboration or just to say hi, you can reach me at any of the social media platforms or send me an email directly at 
            </p>
            <div data-aos="fade-up" className={classes.email}><a href="mailto:yipengteo.luke@gmail.com">yipengteo.luke@gmail.com</a></div>
            <div data-aos="fade-up" className={classes.navBar__secondary}>
                <a href="https://www.instagram.com/yipeng_/" className={classes.navSocials}><FaInstagramSquare size="2.2rem" /></a>
                <a href="https://github.com/teoyi" className={classes.navSocials}><FaGithubSquare size="2.2rem" /></a>
                <a href='https://www.linkedin.com/in/luketeo/' className={classes.navSocials}><FaLinkedin size="2.2rem" /></a>
            </div>
        </div>
    );
}
 
export default Contact;