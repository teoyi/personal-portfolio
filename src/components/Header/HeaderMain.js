import React from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import classes from '../../styles/Header.module.css'
import Image from 'next/image'
import logo from '../../../public/static/logo/logo_turq_crop-removebg-preview.png'

const Header = () => {
    return (
        <nav className={classes.navBar__main}>
            <div className={classes.navBar__left}>
                <Link href="#landing" passHref><Image className={classes.logo} src={logo} alt="logo" width={100} height={23}/></Link>
            </div>
            <div className={classes.navBar__right}>
                <Link href="#about"><a className={classes.navLink}>About</a></Link>
                <Link href="#timeline"><a className={classes.navLink}>Timeline</a></Link>
                <Link href="#projects"><a className={classes.navLink}>Projects</a></Link>
                <Link href="#contact"><a className={classes.navLink}>Contact</a></Link>
            </div>
            
        </nav>
    );
};
 
export default Header
