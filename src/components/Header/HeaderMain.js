import React, { useState } from 'react'
import Link from 'next/link'
import { Spin as Hamburger } from 'hamburger-react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import classes from '../../styles/Header.module.css'
import Image from 'next/image'
import logo from '../../../public/static/logo/logo_turq_crop-removebg-preview.png'

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev);
    }
    
    const handleLogo = () => {
        setNavbarOpen(false);
    }

    return (
        <nav className={classes.navBar__main}>
            {/* <div className={classes.navBar__left}>
                <Link href="#landing"><a className={classes.logo} onClick={handleLogo}>LUKE.DEV</a></Link>
            </div>
            <div className={classes.navBar__right_mobile}>
                <div  className={classes.hamburger}>
                    <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} size={23} rounded color={navbarOpen ? "#e12885": "#86cecb"} />
                </div>
                <ul className={`${classes.menuNav} ${navbarOpen ? classes.showMenu : ""}`}>
                    <li><Link href="#landing"><a className={classes.navLink} onClick={handleToggle}>HOME</a></Link></li>
                    <li><Link href="#about"><a className={classes.navLink} onClick={handleToggle}>ABOUT</a></Link></li>
                    <li><Link href="#timeline"><a className={classes.navLink} onClick={handleToggle}>TIMELINE</a></Link></li>
                    <li><Link href="#projects"><a className={classes.navLink} onClick={handleToggle}>PROJECTS</a></Link></li>
                    <li><Link href="#contact"><a className={classes.navLink} onClick={handleToggle}>CONTACT</a></Link></li>
                </ul>
            </div>
            <div className={classes.navBar__right}>
                <ul className={classes.menuNav_main}>
                    <li><Link href="#landing"><a className={classes.navLink_main}>HOME</a></Link></li>
                    <li><Link href="#about"><a className={classes.navLink_main}>ABOUT</a></Link></li>
                    <li><Link href="#timeline"><a className={classes.navLink_main}>TIMELINE</a></Link></li>
                    <li><Link href="#projects"><a className={classes.navLink_main}>PROJECTS</a></Link></li>
                    <li><Link href="#contact"><a className={classes.navLink_main}>CONTACT</a></Link></li>
                </ul>
            </div> */}
        </nav>
    );
};
 
export default Header
