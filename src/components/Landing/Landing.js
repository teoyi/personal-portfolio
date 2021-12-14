import React from 'react'
import classes from '../../styles/Landing.module.css'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Landing = () => {
    return ( 
        <section className={classes.landing} id="landing">
            <div className={classes.landingWrapper}>
                {/* <p className={classes.name}>YiPeng Teo</p> */}
                <h2 className={classes.luke}>&lt;Luke&gt;</h2>
                <p className={classes.subtitle}>Aspiring web/software developer</p>
            </div>
            <div className={classes.navBar__secondary}>
                <a href="https://www.instagram.com/yipeng_/" className={classes.navSocials}><FaInstagramSquare size="2.2rem" /></a>
                <a href="https://github.com/teoyi" className={classes.navSocials}><FaGithubSquare size="2.2rem" /></a>
                <a href='https://www.linkedin.com/in/luketeo/' className={classes.navSocials}><FaLinkedin size="2.2rem" /></a>
            </div>
        </section>
    );
}
 
export default Landing;