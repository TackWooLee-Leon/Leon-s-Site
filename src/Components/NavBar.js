import { useState } from "react";
import styles from './NavBar.module.css';

export default function NavBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <header>
    
      <nav>
        <ul className={styles.sidebar}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contacts">Contacts</a></li>
        </ul>
        <div className={styles.navContainer}>
            <ul>
                <li><a>Leon Lee</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contacts">Contacts</a></li>
                <li onClick={toggleSidebar}><a><svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" fill="#FFFADE" width="50"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
            </ul>
        </div>
      </nav>
    </header>
  );
}
