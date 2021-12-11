import React from 'react'
import classes from '../../styles/Landing.module.css'

const Landing = () => {
    return ( 
        <section className={classes.landing} id="landing">
            <div className={classes.landingWrapper}>
                <h2 className={classes.name}>YiPeng <span className={classes.luke}>&lt;Luke&gt;</span> Teo</h2>
                <p className={classes.subtitle}>Aspiring web/software developer</p>
            </div>
        </section>
    );
}
 
export default Landing;