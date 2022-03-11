import styles from './style.module.css'
import TitleBlock from "../TitleBlock";
import UniverCard from "../UniverCard";

const TopUniversitiesBlock = ({universities, ...props}) => {
    return(
        <div className={styles.container}>
            <TitleBlock img={'/bookmark-fav-dynamic-color.png'} title={'Популярные университеты'}/>

            <div className={styles.wrapper}>
                {
                    universities.splice(0, 3).map(univer => <UniverCard univer={univer}/>)
                }
            </div>
        </div>
    )
}

export default TopUniversitiesBlock;