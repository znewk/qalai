import styles from './style.module.css'
import {Image} from "react-bootstrap";

const TitleBlock = ({img, title}) => {
    return (
        <div className={styles.container}>
            <Image src={img} className={styles.img}/>
            <span className={styles.title}>{title}</span>
        </div>
    )
}

export default TitleBlock;