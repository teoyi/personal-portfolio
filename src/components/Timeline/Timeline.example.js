import React from 'react'
import classes from '../../styles/Timeline.module.css'

const Timeline = () => {
    return ( 
        <div className={classes.timeline} id='timeline'>
            <div className={classes.contentWrapper}>
                <h3 className={classes.title}>My development journey</h3>
                {/* <div className={classes.milestone}>
                    <p>Year 3 Physics undergraduate</p>
                    <p>Graduation</p>
                    <p>Junior Web Developer @ RPAT Pte Ltd</p>
                    <p>Seeking opportunities</p>
                </div> */}
                <section className={classes.milestone}>
                    <ol>
                        <li>
                            <div>
                                <time>July, 2020</time>
                                Year 3 Physics Undergraduate, start of doing research full scale and python automation
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>August 2020</time>
                                Began The Odin Project
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>June, 2021</time>
                                Finalized research automation script, completed graduation thesis, and successfully graduated from Oregon State University
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>August, 2021</time>
                                Junior Web Developer @ RPAT Pte Ltd
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>November, 2021</time>
                                Software Engineer @ Craft Digital SG
                            </div>
                        </li>
                    </ol>
                </section>
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