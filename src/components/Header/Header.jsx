import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'style/Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="/" className={styles.link}>Home</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/movies" className={styles.link}>Movies</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
