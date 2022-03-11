import styles from './style.module.css'
import {Image} from "react-bootstrap";

const UniverCard = (props) => {
    return (
        <div className={styles.container}>
            <div style={{backgroundImage: `url(${props.univer.url})`}} className={styles.img}>
                <div className={styles.onHover}>
                    <a href="/" className={styles.link}>Узнать больше</a>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.top}>
                    <span className={styles.title}>{props.univer.title}</span>
                    <span className={styles.desc}>
                        <span className={styles.medium}>О универе: </span>
                        {props.univer.description}
                    </span>
                    <span className={styles.desc}>
                        <span className={styles.medium}>Престижные специальности: </span>
                        {props.univer.specializations}
                    </span>
                </div>
                <div className={styles.foot}>
                    <div>
                        <Image src={'/geo.png'} className={styles.geoImg}/>
                        <span className={styles.geo}>Великобритания, Лондон</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniverCard;