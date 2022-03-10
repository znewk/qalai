import React, {useEffect, useState} from "react";
import styles from './style.module.css'
import classnames from 'classnames'

const Header = (props) => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <div className={styles.header}>
            <div className={styles.desktopHeader}>
                <a href="/" className={styles.logo}>Qalai?</a>
                <div className={styles.menu}>
                    <a href="/universities" className={styles.menuItem}>Университеты</a>
                    <a href="/services" className={styles.menuItem}>Услуги</a>
                    <a href="/" className={classnames(styles.menuItem, props.main && styles.picked)}>Главная</a>
                </div>
                <div className={styles.menuBtn} onClick={()=>{setShowMobileMenu(!showMobileMenu)}}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </div>
            <div className={classnames(showMobileMenu ? styles.mobileMenu : styles.hide)}>
                <a href="/universities" className={styles.menuItem}>Университеты</a>
                <a href="/courses" className={styles.menuItem}>Курсы</a>
                <a href="/about" className={styles.menuItem}>О нас</a>
                <a href="/" className={classnames(styles.menuItem, props.main && styles.picked)}>Главная</a>
            </div>
        </div>
    )
}

export default Header;