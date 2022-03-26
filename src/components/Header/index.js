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
                    <a href="/universities" className={classnames(styles.menuItem, props.universities && styles.picked)}>Университеты</a>
                    <a href="/services" className={classnames(styles.menuItem, props.services && styles.picked)}>Услуги</a>
                    <a href="/" className={classnames(styles.menuItem, props.main && styles.picked)}>Главная</a>
                </div>
                <div className={styles.menuBtn} onClick={()=>{setShowMobileMenu(!showMobileMenu)}}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </div>
            <div className={classnames(showMobileMenu ? styles.mobileMenu : styles.hide)}>
                <a href="/universities" className={classnames(styles.menuItem, props.universities && styles.picked)}>Университеты</a>
                <a href="/services" className={classnames(styles.menuItem, props.services && styles.picked)}>Услуги</a>
                <a href="/" className={classnames(styles.menuItem, props.main && styles.picked)}>Главная</a>
            </div>
        </div>
    )
}

export default Header;