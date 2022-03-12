import styles from './style.module.css'
import {Image} from "react-bootstrap";

const UniverCard = (props) => {
    return (
        <div className={styles.container}>
            <div style={{backgroundImage: `url(${props.univer.img_url})`}} className={styles.img}>
                <div className={styles.onHover}>
                    <a href={`/university/${encodeURIComponent(props.univer.url)}?id=${encodeURIComponent(props.univer.id)}`} target="_blank" className={styles.link}>
                        {props.this ? "Вы уже здесь" : "Узнать больше"}
                    </a>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.top}>
                    <span className={styles.title}>{props.univer.title}
                        {
                            props.this && <span className={styles.desc} style={{color: '#818181', fontSize: 17}}> ВЫ ЗДЕСЬ</span>
                        }
                    </span>


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
                        <span className={styles.geo}>{props.univer.country_name}, {props.univer.city_name}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniverCard;