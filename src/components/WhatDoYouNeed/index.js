import styles from "./style.module.css"
import {Image} from "react-bootstrap";

const WhatDoYouNeed = () => {
    return(
        <div className={styles.container}>
            <span className={styles.title}>Что <span style={{color: '#085df2'}}>нужно</span>, чтобы поступить в зарубежный <span style={{color: '#085df2'}}>ВУЗ</span></span>
            <div className={styles.list}>
                <div className={styles.listItem}>
                    <span className={styles.value}><span className={styles.number}>01</span> Сведения о предыдущем образовании: аттестат, диплом или справка с места текущей учебы</span>
                </div>
                <div className={styles.listItem}>
                    <span className={styles.value}><span className={styles.number}>02</span> Мотивационное письмо</span>
                </div>
                <div className={styles.listItem}>
                    <span className={styles.value}><span className={styles.number}>03</span> Резюме и рекомендательные письма</span>
                </div>
                <div className={styles.listItem}>
                    <span className={styles.value}><span className={styles.number}>04</span> Результаты языковых экзаменов IELTS или TOEFL</span>
                </div>
                <div className={styles.listItem}>
                    <span className={styles.value}><span className={styles.number}>05</span> Пройти собеседование (в некоторых случаях)</span>
                </div>
            </div>
            <a href="/services" className={styles.btn}>Получить помощь в постулении</a>
        </div>
    )
}

export default WhatDoYouNeed;