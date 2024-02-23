
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
          
    <header>
   
    <nav className={styles.nav}>
        <ul className={styles.navContainer}>
            <li className={styles.navName}>
                <a>Leon Lee</a>
            </li>

            <div className={styles.navLinksWrapper}>
                <li className={styles.navLinks}>
                    <a href="#about">About</a>
                </li>

                <li className={styles.navLinks}>
                    <a href="#projects">Projects</a>
                </li>

                <li className={styles.navLinks}>
                    <a href="#contacts">Contacts</a>
                </li>
            </div>
        </ul>
    </nav>



    </header>
    )

}
