import styles from './Contact.module.css'

export default function Contact () {
    return(
        <div className={styles.contactContainer}>
            <h1 className={styles.contactHeader}>Contact Me</h1>
            <a href="mailto:tackwlee01@gmail.com"><img src="/images/gmail.svg" alt="gmail logo"></img></a>
        </div>
    )
}