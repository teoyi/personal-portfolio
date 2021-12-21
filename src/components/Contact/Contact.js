import React, { useEffect } from 'react'
import classes from '../../styles/Contact.module.css'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Contact = () => {

    return ( 
        <div className={classes.contact} id="contact">
            <h1 className={classes.title}>Get in touch</h1>
            <p className={classes.contactContent}>
                If you would like to get in touch with me about project collaboration or just to say hi, you can reach me at any of the social media platforms in the menu or send me an email directly at 
            </p>
            <div className={classes.email}><a href="mailto:yipengteo.luke@gmail.com">yipengteo.luke@gmail.com</a></div>
        </div>
    );
}
 
export default Contact;