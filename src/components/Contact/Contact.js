import React, { useEffect } from 'react'
import classes from '../../styles/Contact.module.css'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Contact = () => {

    return ( 
        <div className={classes.contact} id="contact">
            <h1 className={classes.title}>Get in touch</h1>
            <p className={classes.contactContent}>
                If you would like to get in touch with me about project collaborations, job opportunities or just to say hi, you can reach me at
            </p>
            <p className={classes.contactContentMobile}>
                If you would like to get in touch regarding work or just to say hi, you can reach me at
            </p>
            <div className={classes.social}>
                <a href="https://www.instagram.com/yipeng_/"><FaInstagramSquare className={classes.navSocials} /></a>
                <a href="https://github.com/teoyi"><FaGithubSquare className={classes.navSocials} /></a>
                <a href='https://www.linkedin.com/in/luketeo/' ><FaLinkedin className={classes.navSocials} /></a>
            </div>
            {/* <p className={classes.contactContent1}>reach out to me on any of the social media platforms </p>
            <p className={classes.contactContent1}>or</p>
            <p className={classes.contactContent1}>send me an email directly at </p> */}
            <div className={classes.email}><a href="mailto:yipengteo.luke@gmail.com">yipengteo.luke@gmail.com</a></div>
            {/* <div className={classes.social}>
                <a href="https://www.instagram.com/yipeng_/" className={classes.navSocials}><FaInstagramSquare size="4vw" /></a>
                <a href="https://github.com/teoyi" className={classes.navSocials}><FaGithubSquare size="4vw" /></a>
                <a href='https://www.linkedin.com/in/luketeo/' className={classes.navSocials}><FaLinkedin size="4vw" /></a>
            </div> */}
        </div>
    );
}
 
export default Contact;