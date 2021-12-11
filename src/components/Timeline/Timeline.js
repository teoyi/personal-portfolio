import React from 'react'
import classes from '../../styles/Timeline.module.css'

const Timeline = () => {
    return ( 
        <div className={classes.timeline} id='timeline'>
            <div className={classes.contentWrapper}>
                <h3>My development journey</h3>
                <div className={classes.milestone}>
                    <p>Year 3 Physics undergraduate</p>
                    <p>Graduation</p>
                    <p>Junior Web Developer @ RPAT Pte Ltd</p>
                    <p>Seeking opportunities</p>
                </div>
                <div>
                    <p>Skills I have acquired</p>
                    <div className={classes.skillsWrapper}>
                        <div>
                            <p>Languages</p>
                            <ul>
                                <li>Python</li>
                                <li>PHP</li>
                                <li>JavaScript</li>
                                <li>HTML5/CSS3</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div>
                            <p>Framework/Library</p>
                            <ul>
                                <li>jQuery</li>
                                <li>React</li>
                                <li>Bootstrap4</li>
                                <li>Gatsby.js</li>
                                <li>Next.js</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Timeline;