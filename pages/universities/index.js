import styles from './style.module.css'
import FilterBlock from "../../src/components/FilterBlock";
import Head from "next/head";
import Header from "../../src/components/Header";
import {useEffect, useState} from "react";
import API from "../../src/api";
import TitleBlock from "../../src/components/TitleBlock";
import UniverCard from "../../src/components/UniverCard";
import Footer from "../../src/components/Footer";
import { useRouter } from 'next/router'

const Universities = () => {

    const api = new API()
    const router = useRouter();

    const [universities, setUniversities] = useState([])
    const [universitiesForFilter, setUniversitiesForFilter] = useState([])
    const [unversitiesLoading, setUniversitiesLoading] = useState(true)

    const [cities, setCities] = useState([])
    const [citiesLoading, setCitiesLoading] = useState(true)

    const loadUniversitiesForFilter = async () => {
        const universities = await api.getUniversities()
        setUniversitiesForFilter(universities)
    }

    const loadUniversities = async () => {
        const universities = await api.getUniversities()
        setUniversities(universities)
        setUniversitiesLoading(false)
    }
    const loadCountries = async () => {
        const cities = await api.getCountries()
        setCities(cities)
        setCitiesLoading(false)
    }

    const filterHandler = async (coutnryId, universityId) => {
        setUniversitiesLoading(true)
        console.log('countryID, universityID', coutnryId, universityId)
        if(coutnryId==0 && universityId==0) {
            router.reload()
        } else {
            const universities = await api.getFilteredUniversities(coutnryId, universityId)
            setUniversities(universities)
            setUniversitiesLoading(false)
        }
    }

    useEffect(()=>{
        loadUniversitiesForFilter()
        loadUniversities()
        loadCountries()
    }, [])
    return (
        <div>
            <Head>
                <title>Qalai - Университеты</title>
                <link rel="icon" href="/icon.png" />
            </Head>

            <Header universities={true}/>
            <FilterBlock universities={universitiesForFilter} cities={cities} filterHandler={filterHandler}/>

            <div className={styles.universities}>
                <TitleBlock img={'/bookmark-fav-dynamic-color.png'} title={'Университеты'}/>

                {
                    unversitiesLoading ? (
                        <div className={styles.loading}>
                            <span>Загрузка...</span>
                        </div>
                    ) : (
                        <div className={styles.wrapper}>
                            {
                                universities.length!=0 ? universities.map(univer => <UniverCard univer={univer}/>) : (
                                    <div className={styles.loading}>
                                        <span>Ошибка</span>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>

            <Footer/>
        </div>
    )
}

export default Universities;