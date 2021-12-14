import classes from '../../styles/Projects.module.css'
import Image from 'next/image'
import toolbox from '../../../public/static/images/toolbox.png'

const Projects = () => {
    return ( 
        <div id="projects" className={classes.projectWrapper}>
            <section className={classes.projects}>
                <h2 className={classes.mainTitle}>Notable Projects</h2>
                <div className={classes.construction}>
                    <h2 className={classes.title}>Section under construction</h2>
                    <div className={classes.underConstructWrap}>
                        <div className={classes.underConstruct}>
                            <Image src={toolbox} alt="Under construction" />
                        </div>
                    </div>
                    <p className={classes.subtitle}>Tune back in at a later time to check out what is in store!</p>
                </div>
            </section>
            {/* <section className={classes.projects}>Project 2</section>
            <section className={classes.projects}>Project 3</section>
            <section className={classes.projects}>Project 4</section> */}
        </div>
        
    );
}
 
export default Projects;