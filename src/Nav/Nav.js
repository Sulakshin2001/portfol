import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link duration={500} spy={true} smooth={true} offset={-250} className={styles.href} to="main">Главное</Link>
            <Link duration={500} spy={true} smooth={true} offset={-250} className={styles.href} to="skills">Скилы</Link>
            <Link duration={500} spy={true} smooth={true} offset={-250} className={styles.href} to="Project">Проекты</Link>
            <Link duration={500} spy={true} smooth={true}  className={styles.href} to="contact">Контакты</Link>

        </div>
    )
}