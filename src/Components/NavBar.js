import { slide as Menu } from 'react-burger-menu';
import styles from './NavBar.module.css';

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

      {/* burger menu */}
      <div className={styles.bmContainer}>
        <Menu right className={styles.burgerMenu}>
            <a id="about" className={styles.menuItem} href="#about">About</a>
            <a id="projects" className={styles.menuItem} href="#projects">Projects</a>
            <a id="contacts" className={styles.menuItem} href="#contacts">Contacts</a>
        </Menu>
      </div>
    </header>
  );
}
