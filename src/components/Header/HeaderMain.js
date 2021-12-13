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

    return (
        <nav className={classes.navBar__main}>
            <div className={classes.navBar__left}>
                <Link href="#landing" passHref><Image className={classes.logo} src={logo} alt="logo" width={100} height={23}/></Link>
            </div>
            <div className={classes.navBar__right}>
                <div  className={classes.hamburger}>
                    <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} size={23} rounded color={navbarOpen ? "#e12885": "#86cecb"} />
                </div>
                <ul className={`${classes.menuNav} ${navbarOpen ? classes.showMenu : ""}`}>
                    <li><Link href="/"><a className={classes.navLink} onClick={handleToggle}>Home</a></Link></li>
                    <li><Link href="#about"><a className={classes.navLink} onClick={handleToggle}>About</a></Link></li>
                    <li><Link href="#timeline"><a className={classes.navLink} onClick={handleToggle}>Timeline</a></Link></li>
                    <li><Link href="#projects"><a className={classes.navLink} onClick={handleToggle}>Projects</a></Link></li>
                    <li><Link href="#contact"><a className={classes.navLink} onClick={handleToggle}>Contact</a></Link></li>
                </ul>
            </div>
        </nav>
    );
};
 
export default Header
