import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Image from 'next/image'
import profilePicCropped from '../../../public/static/images/theonly_square.png'
import profilePicMain from '../../../public/static/images/theonly_main.png'
import classes from '../../styles/About.module.css'

const About = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    }, []);

    return ( 
        <section className={classes.about} id="about">
            <div data-aos="fade-up" className={classes.contentWrapper}>
                <h2 className={classes.greetings}>Hello there!</h2>
                <div className={classes.subtitleWrapper}>
                    <p className={classes.subtitle}>
                        My name is <span className={classes.firstName}>YiPeng</span> and I go by the name <span className={classes.engName}>Luke</span>. 
                        <br />
                        <br />
                        I am a self-taught developer that has since been involved in projects in both personal and professional setting. Action speaks louder than words, so I will let this website speak on behalf my skills.
                    </p>
                </div>
                <div data-aos="fade-up" className={classes.imageWrapper}>
                    <div className={classes.aboutImage}>
                        <Image className={classes.image} src={profilePicCropped} alt="me" layout='fill' objectFit='contain'  />
                    </div>
                    <div data-aos="fade-left" className={classes.outlineImage}></div>
                    <div data-aos="fade-right" className={classes.outlineImage2}></div>
                </div>
            </div>
            <div data-aos="fade-down" className={classes.imageWrapperDesktop}>
                <div className={classes.aboutImageDesktop}>
                    <Image src={profilePicMain} alt="me" layout='fill' objectFit='contain'  />
                </div>
                <div data-aos="fade-left" className={classes.outlineImage}></div>
                <div data-aos="fade-right" className={classes.outlineImage2}></div>
            </div>
        </section>
        
    );
}
 
export default About;