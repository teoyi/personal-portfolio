import React from 'react'
import classes from '../../styles/Timeline.module.css'

const Timeline = () => {
    return (
        <div className={classes.wrapper} id="timeline">
            <div className={classes.timelineWrapper}> 
                <h1 className={classes.title}>My development journey</h1>
                <div className={classes.timeline}>
                    <ul>
                        <li>
                            <div className={classes.content}>
                                <h3>July 2020</h3>
                                <p>Year 3, Physics Undergraduate</p>
                                <p>Scientific computing with Python</p>
                            </div>
                        </li>
                        
                        <li>
                            <div className={classes.content}>
                                <h3>August 2020</h3>
                                <p>Discovered and worked on <span className={classes.highlight}><a href="#">The Odin Project</a></span></p>
                                <p>The Odin Project: Open source web development course</p>
                                <div className={classes.buttonWrap}>
                                    <a href="#" className={classes.buttonmain}>Etch a Sketch</a>
                                    <a href="#" className={classes.buttonalt}>Library</a>
                                </div>
                                <div className={classes.buttonWrap}>
                                    <a href="#" className={classes.buttonalt}>Tic Tac Toe</a>
                                    <a href="#" className={classes.buttonmain}>Rock Paper Scissors</a>
                                </div>
                            </div>
                        </li>
                        
                        <li>
                            <div className={classes.content}>
                                <h3>June 2021</h3>
                                <p>Completed python research automation script</p>
                                <p>Graduated with latin honors, Summa Cum Laude</p>
                                <div className={classes.buttonWrap}> 
                                    <a href="#" className={classes.buttonmain}>Automation Script</a>
                                    <a href="#" className={classes.buttonmain}>Certificate of Completion</a>
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
        </div>
        
    )
}

export default Timeline
