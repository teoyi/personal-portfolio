import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import classes from '../../styles/Landing.module.css'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";


const Landing = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    }, []);

    return ( 
        <section className={classes.landing} id="landing">
            <p data-aos="fade-right" className={classes.subtitle}>Aspiring full-stack web developer</p>
            <div className={classes.landingWrapper}>
                <h2 data-aos="fade-left" className={classes.luke}>Luke</h2>
            </div>
            <div data-aos="fade-up" className={classes.navBar__secondary}>
                <a href="https://www.instagram.com/yipeng_/" className={classes.navSocials}><FaInstagramSquare size="2.2rem" /></a>
                <a href="https://github.com/teoyi" className={classes.navSocials}><FaGithubSquare size="2.2rem" /></a>
                <a href='https://www.linkedin.com/in/luketeo/' className={classes.navSocials}><FaLinkedin size="2.2rem" /></a>
            </div>
        </section>
    );
}
 
export default Landing;