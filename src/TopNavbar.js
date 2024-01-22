import styles from './TopNavbar.module.css'

export default function TopNavbar() {
    return (
        <div className={styles.navContainer}>
            <nav className = {styles.nav}>
                <ul>
                    <li>
                        <a>Leon Lee</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contacts">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}