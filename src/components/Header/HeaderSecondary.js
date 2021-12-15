import React from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import classes from '../../styles/Header.module.css'

const Header = () => {
    return (
        <div className={classes.navBar__secondary}>
            <a href="#" className={classes.navSocials}><FaInstagramSquare size="2.5rem" /></a>
            <a href="#" className={classes.navSocials}><FaGithubSquare size="2.5rem" /></a>
            <a href='#' className={classes.navSocials}><FaLinkedin size="2.5rem" /></a>
        </div>
    );
};
 
export default Header
