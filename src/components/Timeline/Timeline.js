import React from 'react'
import classes from '../../styles/Timeline.module.css'

const Timeline = () => {
    return (
        <section className={classes.wrapper} id="timeline">
            <div className={classes.timelineWrapper}> 
                <h1 className={classes.title}>My development journey</h1>
                <div className={classes.timeline}>
                    <ul>
                        <li>
                            <div className={classes.content}>
                                <h3>July 2020</h3>
                                <p>Year 3, Physics Undergraduate</p>
                                <p>Started coding with Python for scientific computing</p>
                            </div>
                        </li>
                        
                        <li>
                            <div className={classes.content}>
                                <h3>August 2020</h3>
                                <p>Worked on <span className={classes.highlight}><a href="#">The Odin Project</a></span></p>
                                <p>An open source web development course</p>
                                <div className={`${classes.buttonWrap} ${classes.first}`}>
                                    <a href="https://github.com/teoyi/rock-paper-scissors" target="_blank" rel="noopener noreferrer" className={classes.buttonmain}>Rock Paper Scissors</a>
                                    <a href="https://github.com/teoyi/etch-a-sketch" target="_blank" rel="noopener noreferrer" className={classes.buttonalt}>Etch a Sketch</a>
                                    <a href="https://github.com/teoyi/simple-calculator" target="_blank" rel="noopener noreferrer" className={classes.buttonmain}>Calculator</a>
                                    <a href="https://github.com/teoyi/library" target="_blank" rel="noopener noreferrer" className={classes.buttonalt}>Library</a>
                                </div>
                            </div>
                        </li>
                        
                        <li>
                            <div className={classes.content}>
                                <h3>June 2021</h3>
                                <p>Completed python research automation script</p>
                                <p>Graduated with latin honors, Summa Cum Laude</p>
                                <div className={classes.buttonWrap}> 
                                    <a href="https://github.com/teoyi/research-process-automation" target="_blank" rel="noopener noreferrer" className={classes.buttonmain}>Automation Script</a>
                                    <a href="/static/assets/eDiploma.pdf" alt="Certificate of completion" target="_blank" rel="noopener noreferrer" className={classes.buttonalt}>Graduation Certificate</a>
                                </div>
                                
                            </div>
                        </li>
                        
                        <li>
                            <div className={classes.content}>
                                <h3>August 2021</h3>
                                <p>Junior Web Developer @ <span className={classes.highlight}><a href="#">RPAT Pte Ltd</a></span></p>
                            </div>
                        </li>
                        
                        <li>
                            <div className={classes.content}>
                                <h3>November 2021</h3>
                                <p>Software Engineer @ <span className={classes.highlight}><a href="#">Craft Digital Pte Ltd</a></span></p>
                            </div>
                        </li>
                    {/* <div style="clear:both;"></div> */}
                    </ul>
                </div>
            </div>
        </section>
        
    )
}

export default Timeline
