import React from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import classes from '../../styles/Header.module.css'

const Header = () => {
    return (
        <div className={classes.navBar__secondary}>
            <a href="#" className={classes.navSocials}><AiFillGithub size="2.3rem" /></a>
            <a href='#' className={classes.navSocials}><AiFillLinkedin size="2.3rem" /></a>
        </div>
    );
};
 
export default Header
