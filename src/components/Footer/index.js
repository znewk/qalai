import styles from './style.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <a href={'/'} className={styles.logo}>Qalai?</a>
            <div className={styles.wrapper}>
                <div className={styles.list}>
                    <span className={styles.title}>Контанкты</span>
                    <a href={'tel:+77086157439'} className={styles.value}>+7 (708) 615-74-39</a>
                    <a href={'tel:+77086157439'} className={styles.value}>+7 (708) 615-74-39</a>
                </div>

                <div className={styles.list}>
                    <span className={styles.title}>Почта</span>
                    <a href={'mailto:qalai@gmail.com'} className={styles.value}>qalai@gmail.com</a>
                </div>

                <div className={styles.list}>
                    <span className={styles.title}>Соц. сети</span>
                    <a href={'https://www.instagram.com/?hl=ru'} className={styles.value}>Instagram</a>
                </div>

                <div className={styles.list}>
                    <span className={styles.title}>Маршрутизация</span>
                    <a href={'/'} className={styles.value}>Главная</a>
                    <a href={'/universities'} className={styles.value}>Университеты</a>
                    <a href={'/services'} className={styles.value}>Услуги</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;