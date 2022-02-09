import React, { useEffect } from 'react'
import classes from '../../styles/Landing.module.css'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import Marquee from "react-fast-marquee"


const Landing = () => {
    return ( 
        <section className={classes.section__Landing} id="landing">
            <div className={classes.wrapper}>
                <div className={classes.nameArea}>
                    <div className={classes.firstName}>
                        luke
                    </div>
                    <div className={classes.separator}> 
                    •
                    </div>
                    <div className={classes.lastName}>
                        teo
                    </div>
                </div>
                <div className={classes.subText}>
                    Aspiring full-stack web developer
                </div>
            </div>
        </section>
    );
};
 
export default Landing;