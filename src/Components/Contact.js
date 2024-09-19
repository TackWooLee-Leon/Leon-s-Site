import styles from './Contact.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function Contact () {
    return(
        <div id="contacts" className={styles.contactContainer}>
            
           
            <div className={styles.contactLinks}>
                <div className={styles.contactInfo}>
                    <h1>Let's Chat.</h1>
                    <p>I'm currently looking for a <span>Web Developer</span> role, let me know if you think I'm a good fit! If you have questions, you can contact me through the form as well.</p>
                    <div data-aos="zoom-in" className={styles.emailContainer}>
                        <a href="mailto:tackwlee01@gmail.com"><img src={process.env.PUBLIC_URL + "/images/gmail.svg"} alt="gmail logo"></img></a>
                        <h2>Email me at <a className={styles.emailLink} href="mailto:tackwlee01@gmail.com">tackwlee01@gmail.com</a></h2>
                    </div>
                    {/* <h3>or click the gmail icon above!</h3> */}
                </div>

            </div>
                
            <div className={styles.formContainer}>
                <h1 className={styles.contactHeader}>Send Me A Message</h1>
                <form class={styles.form} action="https://formsubmit.co/4d027c1526708d13a1e3bbe0eb66cbaa" method="POST">
                    {/* <label for="Name">Name</label> */}
                    <input id={styles.name} type="text" name="name" required placeholder="Enter Name"></input>
                    {/* <label for="Email">Email</label> */}
                    <input id={styles.email} type="email" name="email" required placeholder="Enter Email Address"></input>
                    {/* <label for="Message">Message</label> */}
                    <textarea id={styles.message} type="text" name="message" required placeholder="Enter Message"></textarea>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <button className={styles.button} type="submit">Submit</button>
                </form>
             
            </div>

            <div className={styles.simpleForm}>
                <h1>Let's Chat.</h1>
                <form className={styles.form} action="https://formsubmit.co/4d027c1526708d13a1e3bbe0eb66cbaa" method="POST">
                    {/* <label for="Name">Name</label> */}
                    <input id={styles.name} type="text" name="name" required placeholder="Enter Name"></input>
                    {/* <label for="Email">Email</label> */}
                    <input id={styles.email} type="email" name="email" required placeholder="Enter Email Address"></input>
                    {/* <label for="Message">Message</label> */}
                    <textarea id={styles.message} type="text" name="message" required placeholder="Enter Message"></textarea>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <button className={styles.button} type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}