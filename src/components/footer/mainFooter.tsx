import * as React from 'react';
import styles from './styles.module.css';


const MainFooter = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="#privacy">Privacy Policy</a> | 
          <a href="#terms">Terms of Service</a> | 
          <a href="#contact">Contact Us</a>
        </div>
        <div className="footer-copy">
          © 2024 MyCompany. All Rights Reserved.
        </div>
      </footer>
    )
}

export default MainFooter;