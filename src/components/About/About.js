import React, { useState } from 'react'
import Image from 'next/image'
import profilePicCropped from '../../../public/static/images/theonly_square.png'
import profilePicMain from '../../../public/static/images/theonly_main.png'
import classes from '../../styles/About.module.css'


const About = () => {
    const [clicked, setClicked] = useState(false);
    return ( 
        <section className={classes.about} id="about">
            {/* <div className={classes.vertLine}></div> */}
            <div className={classes.mainText}>
                ABOUT
            </div>
            <div className={classes.leftText}>
                <div className={classes.leftTitle}><span className={classes.preText}>Graduate of</span><br /><span className={classes.title}>Oregon State University</span></div>
                <div className={classes.para}>Majored in Physics and minored in finance</div>
                <div className={classes.para}>Honors College Associate</div>
                <div className={classes.para}>Author of a research automation script</div>
                <div className={classes.para}>Successful completion of research thesis and thesis defence</div>
                <div className={classes.para}>Graduated with the highest distinction, Summa Cum Laude</div>
            </div>
            <div className={classes.aboutImage1}>
                <Image src={profilePicMain} alt="me" layout='fill' objectFit='contain'  />
            </div>
            <div className={classes.rightText}>
                <div className={classes.title}>Self-taught Developer</div>
                <div className={classes.para}>Learnt web development through<br /> The Odin Project</div>
                <div className={classes.para}>Became a Junior Full-Stack web developer <br /> @ RPAT Pte Ltd</div>
                <div className={classes.para}>Currently a Software Engineer <br/>@ Craft Digital Pte Ltd</div>
            </div>
        </section>
        
    );
}
 
export default About;