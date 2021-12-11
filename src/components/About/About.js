import Image from 'next/image'
import profilePic from '../../../public/static/images/sheeep.png'
import classes from '../../styles/About.module.css'

const About = () => {
    return ( 
        <div className={classes.about} id="about">
            <div className={classes.aboutContent}>
                <h2>Hello there!</h2>
                <p>My name is YiPeng and I go by the name Luke. I am a self-taught developer that has since been involved in projects in both personal and professional setting. Action speaks louder than words, so I will let this website speak on behalf my skills.</p>
            </div>
            <Image className={classes.aboutImage} src={profilePic} alt="me" />
        </div>
        
    );
}
 
export default About;