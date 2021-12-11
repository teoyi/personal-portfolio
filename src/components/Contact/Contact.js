import classes from '../../styles/Contact.module.css'

const Contact = () => {
    return ( 
        <div className={classes.contact} id="contact">
            <h1 className={classes.title}>Get in touch</h1>
            <p className={classes.removeMargin}>
                If you would like to get in touch with me about project collaboration or just to say hi,<br />fill out the form below or send me an email at <span className={classes.email}><a href="mailto:yipengteo.luke@gmail.com">yipengteo.luke@gmail.com</a></span>
            </p>
        </div>
    );
}
 
export default Contact;