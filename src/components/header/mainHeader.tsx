import * as React from 'react';
import styles from './styles.module.css';


const MainHeader = () => {
    return (
        <header className={styles.header}>
        <div className={styles.logo}>MyLogo</div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>NAV ITEM</li>
          </ul>
        </nav>
      </header>
    )
}

export default MainHeader;