import styles from "./NavBar.module.css"

export default function NavBar () {
    return (
        <nav className={styles.nav}>
                <ul className={styles.navContainer}>
                    <li className={styles.navName}>
                        <a>Leon Lee</a>
                    </li>

                    <li className={styles.navLink}>
                        <a href="#about">About</a>
                    </li>

                    <li className={styles.navLink}>
                        <a href="#projects">Projects</a>
                    </li>

                    <li className={styles.navLink}>
                        <a href="#contacts">Contacts</a>
                    </li>
                </ul>
            </nav>
    )
}