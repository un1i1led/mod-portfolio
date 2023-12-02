import email from '../assets/email.svg';

const Contact = () => {
    return (
        <div className='contact-main'>
            <h1>Trying to reach out?</h1>
            <h2>Send me an email!</h2>
            <img src={email} alt=''/>
            <p>gsq.sanchez@gmail.com</p>
        </div>
    )
}

export default Contact;