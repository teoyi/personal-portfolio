import React from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import classes from '../../styles/Header.module.css'

const Header = () => {
    return (
        <nav className={classes.navBar__main}>
            <Link href="#about"><a className={classes.navLink}>About</a></Link>
            <Link href="#timeline"><a className={classes.navLink}>Timeline</a></Link>
            <Link href="#projects"><a className={classes.navLink}>Projects</a></Link>
            <Link href="#contact"><a className={classes.navLink}>Contact</a></Link>
            {/* <div>
                <a href="#" className="navSocials"><AiFillGithub size="3rem" /></a>
                <a href='#' className="navSocials"><AiFillLinkedin size="3rem" /></a>
            </div> */}
        </nav>
    );
};
 
export default Header
