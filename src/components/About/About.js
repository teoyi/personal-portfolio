import Image from 'next/image'
import profilePic from '../../../public/static/images/sheeep.png'
import classes from '../../styles/About.module.css'

const About = () => {
    return ( 
        <div className={classes.about} id="about">
            <h2 className={classes.greetings}>Hello there!</h2>
            <div className={classes.imageWrapper}>
                <div className={classes.aboutImage}>
                    <Image className={classes.image} src={profilePic} alt="me" />
                </div>
            </div>
            <div className={classes.subtitleWrapper}>
                <p className={classes.subtitle}>
                    My name is <span className={classes.firstName}>YiPeng</span> and I go by the name <span className={classes.engName}>Luke</span>. 
                    <br />
                    <br />
                    I am a self-taught developer that has since been involved in projects in both personal and professional setting. Action speaks louder than words, so I will let this website speak on behalf my skills.
                </p>
            </div>
        </div>
        
    );
}
 
export default About;