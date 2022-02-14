import React, { useState } from 'react'
import Image from 'next/image'
import profilePicCropped from '../../../public/static/images/theonly_square.png'
import profilePicMain from '../../../public/static/images/theonly_main.png'
import classes from '../../styles/About.module.css'
import { SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiReact, SiPython, SiMysql, SiPhp, SiNextdotjs, SiTailwindcss, SiMongodb, SiPhpmyadmin, SiR   } from "react-icons/si";


const About = () => {
    return ( 
        <section className={classes.wrapper} id="about">
            <div className={classes.about}>
                {/* <div className={classes.vertLine}></div> */}
                <div className={classes.mainText}>
                    ABOUT
                </div>
                <div className={classes.imgWrapper}>
                    <div className={classes.aboutImageMobile}>
                        <Image src={profilePicCropped} alt="me" layout='fill' objectFit='contain'  />
                    </div>
                </div>
                <div className={classes.exteriorWrapper}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.aboutImage1}>
                            <Image src={profilePicMain} alt="me" layout='fill' objectFit='contain'  />
                        </div>
                        <div className={classes.bottomText}>
                            <div className={classes.preq}>
                            Self-taught developer and an avid learner of modern technologies.
                            </div>
                            <div className={classes.skillsWrapper}>
                                <div className={classes.title}>Acquired Skills</div>
                                <hr className={classes.line} />
                                <div className={classes.icons}> 
                                    <div className={classes.firstIcon}><SiJavascript /></div>
                                    <div className={classes.icon}><SiPhp /></div>
                                    <div className={classes.icon}><SiHtml5 /></div>
                                    <div className={classes.icon}><SiCss3 /></div>
                                    <div className={classes.icon}><SiTailwindcss /></div>
                                </div>
                                <div className={classes.icons}> 
                                    <div className={classes.firstIcon}><SiBootstrap /></div>
                                    <div className={classes.icon}><SiReact /></div>
                                    <div className={classes.icon}><SiNextdotjs /></div>
                                </div>
                                <div className={classes.icons}> 
                                    <div className={classes.firstIcon}><SiMongodb /></div>
                                    <div className={classes.icon}><SiPhpmyadmin /></div>
                                    <div className={classes.icon}><SiMysql /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        
    );
}
 
export default About;