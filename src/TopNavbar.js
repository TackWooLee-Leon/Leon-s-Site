import styles from './TopNavbar.module.css'

export default function TopNavbar() {
    return (
        <div className={styles.container}>
            <nav className = {styles.nav}>
                <ul>
                    <li>
                        <a>Leon Lee</a>
                    </li>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#Contacts">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}