import classes from '../../styles/Projects.module.css'
import Image from 'next/image'
import toolbox from '../../../public/static/images/toolbox.png'
import comingSoon from '../../../public/static/images/coming_soon.png'
import fxjournal from '../../../public/static/images/fxjournal_thumb.png'

const Projects = () => {
    return ( 
        <section id="projects" className={classes.projects}>
            <div className={classes.title}>PROJECTS</div>
            <div className={classes.project1}>
                <div className={classes.image1}>
                    <Image src={fxjournal} alt="fxjournal project" />
                </div>
                <div className={classes.text}>
                    <h1>fxjournal</h1>
                    <p>Status: Under Construction</p>
                    <p>A one stop journaling site for traders to note down their trades for further analysis.</p>
                    <p>Stack: MERN</p>
                </div>
            </div>
            <div className={classes.project2}>
                <div className={classes.image}>
                    <Image src={comingSoon} alt="project"/>
                </div>
                <div className={classes.text}>
                    <h1>E-Commerce</h1>
                    <p>A single vendor site that allows users to sell their own products coupled with their own admin panel to conduct sales analytics</p>
                </div>
            </div>
            <div className={classes.project3}>
                <div className={classes.image}>
                    <Image src={comingSoon} alt="project"/>
                </div>
                <div className={classes.text}>
                    <h1>Gist.</h1>
                    <p>A smart news outlet that gives users news that are summarized to ideally only requiring less than a minute to understand current events</p>
                </div>
            </div>
        </section>
        
    );
}
 
export default Projects;