import React, { useState } from 'react'
import Link from 'next/link';
import classes from '../../styles/Header.module.css'
import Marquee from "react-fast-marquee"
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [hoverActiveHome, setHoverActiveHome] = useState(false);
    const [hoverActiveAbout, setHoverActiveAbout] = useState(false);
    const [hoverActiveProjects, setHoverActiveProjects] = useState(false);
    const [hoverActiveContact, setHoverActiveContact] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev);
        console.log('clicked');
    }
    

    return (
        <div className={classes.header}>
            <div className={classes.menu} onClick={handleToggle}>{!navbarOpen ? "MENU" : "CLOSE"}</div>
            <ul className={`${classes.menuNav} ${navbarOpen ? classes.showMenu : ""}`}>
                <li>
                    <div 
                        onMouseEnter={() => setHoverActiveHome(true)} 
                        onMouseLeave={() => setHoverActiveHome(false)}
                        // className={hoverActiveHome ? classes.hoverActivated : ""}
                    >
                        <Link href="#landing">
                            <a className={`${classes.navLink} ${hoverActiveHome ? classes.hide : classes.show}`} onClick={handleToggle}>
                                HOME
                            </a>
                        </Link>
                        <div className={classes.marqWrapper}>
                            <Link href="#landing" passHref={true}>
                                <a className={`${classes.navMarquee} ${hoverActiveHome ? classes.show : classes.hide}`} onClick={handleToggle}>
                                    <Marquee speed="100" gradient={false} delay="0" >
                                        <div className={classes.marquee_text}>HOME</div>
                                        <div className={classes.marquee_text}>HOME</div>
                                        <div className={classes.marquee_text}>HOME</div>
                                        <div className={classes.marquee_text}>HOME</div>
                                        <div className={classes.marquee_text}>HOME</div>
                                        <div className={classes.marquee_text}>HOME</div>
                                        <div className={classes.marquee_text}>HOME</div>
                                        <div className={classes.marquee_text}>HOME</div>
                                        <div className={classes.marquee_text}>HOME</div>
                                        <div className={classes.marquee_text}>HOME</div>
                                        <div className={classes.marquee_text}>HOME</div>
                                        <div className={classes.marquee_text}>HOME</div>
                                        <div className={classes.marquee_text}>HOME</div>
                                        <div className={classes.marquee_text}>HOME</div>
                                    </Marquee>
                                </a>
                            </Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div 
                        onMouseEnter={() => setHoverActiveAbout(true)} 
                        onMouseLeave={() => setHoverActiveAbout(false)}
                        className={hoverActiveAbout ? classes.hoverActivated : ""}
                    >
                        <Link href="#about">
                            <a className={`${classes.navLink} ${hoverActiveAbout ? classes.hide : classes.show}`} onClick={handleToggle}>
                                ABOUT
                            </a>
                        </Link>
                        <div className={classes.marqWrapper}>
                            <Link href="#about" passHref={true} className={classes.marqLink}>
                                <a className={`${classes.navMarquee} ${hoverActiveAbout ? classes.show : classes.hide}`} onClick={handleToggle}>
                                    <Marquee speed="100" gradient={false} delay="0" >
                                        <div className={classes.marquee_text}>ABOUT</div>
                                        <div className={classes.marquee_text}>ABOUT</div>
                                        <div className={classes.marquee_text}>ABOUT</div>
                                        <div className={classes.marquee_text}>ABOUT</div>
                                        <div className={classes.marquee_text}>ABOUT</div>
                                        <div className={classes.marquee_text}>ABOUT</div>
                                        <div className={classes.marquee_text}>ABOUT</div>
                                        <div className={classes.marquee_text}>ABOUT</div>
                                        <div className={classes.marquee_text}>ABOUT</div>
                                        <div className={classes.marquee_text}>ABOUT</div>
                                        <div className={classes.marquee_text}>ABOUT</div>
                                        <div className={classes.marquee_text}>ABOUT</div>
                                        <div className={classes.marquee_text}>ABOUT</div>
                                        <div className={classes.marquee_text}>ABOUT</div>
                                    </Marquee>
                                </a>
                            </Link>
                        </div>
                    </div>
                </li>
                {/* <li><Link href="#timeline"><a className={classes.navLink} onClick={handleToggle}>TIMELINE</a></Link></li> */}
                <li>
                    <div 
                        onMouseEnter={() => setHoverActiveProjects(true)} 
                        onMouseLeave={() => setHoverActiveProjects(false)}
                        className={hoverActiveProjects ? classes.hoverActivated : ""}
                    >
                        <Link href="#projects">
                            <a className={`${classes.navLink} ${hoverActiveProjects ? classes.hide : classes.show}`} onClick={handleToggle}>
                                PROJECTS
                            </a>
                        </Link>
                        <div className={classes.marqWrapper}>
                            <Link href="#projects" passHref={true} className={classes.marqLink}>
                                <a className={`${classes.navMarquee} ${hoverActiveProjects ? classes.show : classes.hide}`} onClick={handleToggle}>
                                    <Marquee speed="100" gradient={false} delay="0" >
                                        <div className={classes.marquee_text}>PROJECTS</div>
                                        <div className={classes.marquee_text}>PROJECTS</div>
                                        <div className={classes.marquee_text}>PROJECTS</div>
                                        <div className={classes.marquee_text}>PROJECTS</div>
                                        <div className={classes.marquee_text}>PROJECTS</div>
                                        <div className={classes.marquee_text}>PROJECTS</div>
                                        <div className={classes.marquee_text}>PROJECTS</div>
                                        <div className={classes.marquee_text}>PROJECTS</div>
                                        <div className={classes.marquee_text}>PROJECTS</div>
                                        <div className={classes.marquee_text}>PROJECTS</div>
                                        <div className={classes.marquee_text}>PROJECTS</div>
                                        <div className={classes.marquee_text}>PROJECTS</div>
                                        <div className={classes.marquee_text}>PROJECTS</div>
                                        <div className={classes.marquee_text}>PROJECTS</div>
                                    </Marquee>
                                </a>
                            </Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={classes.navLink_contact}>
                        <Link href="#contact">
                            <a className={classes.navLink_contactBtn} onClick={handleToggle}>
                                CONTACT
                            </a>
                        </Link>
                        <div className={classes.hrLine}></div>
                        <a href="https://www.instagram.com/yipeng_/" target="_blank" rel="noopener noreferrer" className={classes.navSocials}><FaInstagramSquare size="2rem" /></a>
                        <a href="https://github.com/teoyi" rel="noopener noreferrer" target="_blank" className={classes.navSocials}><FaGithubSquare size="2rem" /></a>
                        <a href='https://www.linkedin.com/in/luketeo/' target="_blank" rel="noopener noreferrer" className={classes.navSocials}><FaLinkedin size="2rem" /></a>
                    </div>
                        
                </li>
            </ul>
            <div className={`${classes.showMenuOverlay} ${navbarOpen ? classes.showMenuOverlayActive : ""}`}></div>
        </div>
    )
}

export default Header
