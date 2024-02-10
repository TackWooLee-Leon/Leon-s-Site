import styles from './Contact.module.css'

export default function Contact () {
    return(
        <div className={styles.contactContainer}>
            <a href="mailto:tackwlee01@gmail.com"><img src="/images/gmail.svg" alt="gmail logo"></img></a>

            <div className={styles.formContainer}>
                <form action="https://formsubmit.co/4d027c1526708d13a1e3bbe0eb66cbaa" method="POST">
                    <label for="Name">Name</label>
                    <input id={styles.name} type="text" name="name" required placeholder="Enter Name"></input>
                    <label for="Email">Email</label>
                    <input id={styles.email} type="email" name="email" required placeholder="Enter Email Address"></input>
                    <label for="Message">Message</label>
                    <textarea id={styles.message} type="text" name="message" required placeholder="Enter Message"></textarea>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <button className={styles.button} type="submit">Submit</button>
                </form>
             
            </div>
        </div>
    )
}