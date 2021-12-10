import classes from '../../styles/Contact.module.css'

const Contact = () => {
    return ( 
        <div>
            <h3>Get in touch</h3>
            <p className={classes.removeMargin}>
                If you would like to get in touch with me about project collaboration or just to say hi,<br />fill out the form below or send me an email at <a href="mailto:yipengteo.luke@gmail.com">yipengteo.luke@gmail.com</a>
            </p>
        </div>
    );
}
 
export default Contact;