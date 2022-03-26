import styles from './style.module.css'
import TitleBlock from "../TitleBlock";
import UniverCard from "../UniverCard";

const TopUniversitiesBlock = ({universities, unversitiesLoading, ...props}) => {
    return(
        <div className={styles.container}>
            <TitleBlock img={'/bookmark-fav-dynamic-color.png'} title={'Популярные университеты'}/>


            {
                unversitiesLoading ? (
                    <div className={styles.loading}>
                        <span>Загрузка...</span>
                    </div>
                ) : (
                    <div className={styles.wrapper}>
                        {
                            universities.length!=0 ? universities.splice(0, 4).map(univer => <UniverCard univer={univer}/>) : (
                                <div className={styles.loading}>
                                    <span>Ошибка</span>
                                </div>
                            )
                        }
                    </div>
                )
            }

            {
                universities.length!=0 && (
                    <div className={styles.flex}>
                        <a className={styles.link} href="/universities">Все университеты</a>
                    </div>
                )
            }
        </div>
    )
}

export default TopUniversitiesBlock;