import React, { useState } from 'react'
import Image from 'next/image'
import profilePicCropped from '../../../public/static/images/theonly_square.png'
import profilePicMain from '../../../public/static/images/theonly_main.png'
import classes from '../../styles/About.module.css'
import { SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiReact, SiPython, SiMysql, SiPhp, SiNextdotjs, SiScikitlearn, SiNumpy, SiPandas  } from "react-icons/si";


const About = () => {
    const [clicked, setClicked] = useState(false);
    return ( 
        <section className={classes.about} id="about">
            {/* <div className={classes.vertLine}></div> */}
            <div className={classes.mainText}>
                ABOUT
            </div>
            <div className={classes.imgWrapper}>
                <div className={classes.aboutImageMobile}>
                    <Image src={profilePicCropped} alt="me" layout='fill' objectFit='contain'  />
                </div>
            </div>
            <div className={classes.contentWrapper}>
                <div className={classes.aboutImage1}>
                    <Image src={profilePicMain} alt="me" layout='fill' objectFit='contain'  />
                </div>
                {/* <div className={classes.aboutContent}> */}
                    <div className={classes.bottomText}>
                        <div className={classes.title}>I&apos;m a self-taught developer, since then I have become familiar with the following</div>
                        <ul className={classes.techExp}>
                            <li>Web Development</li>
                            <li>
                                <div className={classes.icons}>
                                    <SiHtml5 />
                                    <SiCss3 />
                                    <SiJavascript />
                                    <SiBootstrap />
                                    <SiReact />
                                    <SiNextdotjs/>
                                    <SiPhp />
                                    <SiMysql />
                                </div>
                            </li>
                            <li>Scientific Computing</li>
                            <li>
                                <div className={classes.icons}>
                                    <SiPython />
                                    <SiScikitlearn />
                                    <SiNumpy />
                                    <SiPandas />
                                </div>
                            </li>
                        </ul>
                    </div>
                {/* </div> */}
            </div>
        </section>
        
    );
}
 
export default About;