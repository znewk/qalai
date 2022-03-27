import styles from './style.module.css'
import {useState} from "react";

const FilterBlock = ({cities, universities, filterHandler, specializations, ...props}) => {

    const [countryId, setCountryId] = useState(0)
    const [specializationId, setSpecializationId] = useState(0)
    const [languageId, setLanguageId] = useState(0)
    const [universityId, setUniversityId] = useState(0)

    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                <div className={styles.selects}>
                    <select className={styles.select} onChange={e => setCountryId(e.target.value)}>
                        <option value={0}>Страна</option>
                        {
                            cities.map(city => <option value={city.id}>{city.name}</option>)
                        }
                    </select>
                    <select className={styles.select} onChange={e => setSpecializationId(e.target.value)}>
                        <option value={0}>Специальность</option>
                        {
                            specializations.map(specialization => <option value={specialization.id}>{specialization.name}</option>)
                        }
                    </select>
                    <select className={styles.select} onChange={e => setLanguageId(e.target.value)}>
                        <option value={0}>Язык обучения</option>
                        <option value={1}>Английский язык</option>
                        <option value={2}>Русский язык</option>
                    </select>
                    <select className={styles.select} onChange={e => setUniversityId(e.target.value)}>
                        <option value={0}>Университет</option>
                        {
                            universities.map(university => <option value={university.id}>{university.title}</option>)
                        }
                    </select>
                </div>
                <div className={styles.btnBody}>
                    <button className={styles.btn} onClick={()=> {
                        filterHandler(Number(countryId), Number(specializationId), Number(languageId), Number(universityId))
                    }}>Найти университет</button>
                </div>
            </div>
        </div>
    )
}

export default FilterBlock;