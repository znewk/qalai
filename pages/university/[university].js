import styles from './style.module.css'
import {useEffect, useState} from "react";
import Head from "next/head";
import Header from "../../src/components/Header";
import API from "../../src/api";
import TitleBlock from "../../src/components/TitleBlock";
import UniverCard from "../../src/components/UniverCard";
import Footer from "../../src/components/Footer";
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import SendApplicationBlock from "../../src/components/SendApplicationBlock";

const University = (props) => {
    const [university, setUniversity] = useState(props.university)

    const api = new API()

    useEffect(()=>{
        console.log(props)
    }, [])

    return (
        <div>
            <Head>
                <title>Qalai - {university.title}</title>
                <link rel="icon" href="/icon.png" />
            </Head>
            <Header/>

            <div className={styles.header} style={{backgroundImage: university!=null ? `url(${university.img_url})` : null,
                background: university!=null ? null : '#818181'}}>
                <div className={styles.headerFooter}>
                    <div className={styles.titleBlock}>
                        <div className={styles.logo} style={{backgroundImage: university!=null ? `url(${university.logo_url})` : null, background: university!=null ? null : 'white'}}></div>
                        <div>
                            <span className={styles.title}>{university.title}</span> <br/>
                            <span className={styles.subtitle}>{university.country_name}, {university.city_name}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.info}>
                <span className={styles.desc} style={{fontFamily: 'Rubik Medium', fontSize: 22}}>{university.description}</span> <br/> <br/>

                <span className={styles.infoTitle}>Престижные специальности</span>
                <span className={styles.desc}>{university.specializations.map(spec => spec.name).join(', ')}</span>

                <span className={styles.infoTitle}>Стоимость обучения</span>
                <span className={styles.desc}>{university.tuition_fees}</span>

                <span className={styles.infoTitle}>Расходы на проживание</span>
                <span className={styles.desc}>{university.living_expenses}</span>

                <span className={styles.infoTitle}>За рубежом:</span>
                <span className={styles.desc}>{university.is_foreign ? 'Да' : 'Нет'}</span>

                <span className={styles.infoTitle}>Поступление</span>
                <span className={styles.desc}>{university.entrance}</span>

                <span className={styles.infoTitle}>Распорядок учебы</span>
                <span className={styles.desc}>{university.study_schedule}</span>
            </div>

            <div style={{padding: '0 5%', boxSizing: 'border-box', marginTop: '30px'}}>
                <TitleBlock img={'/fire-dynamic-color.png'} title={'Местонахождение'}/>
            </div>
            <div style={{margin: '20px 0'}}>
                <YMaps className={styles.ymaps}>
                    <Map width={'100%'} height={'30vh'} defaultState={{ center: [university.latitude, university.longitude], zoom: 16 }} >
                        <Placemark geometry={[university.latitude, university.longitude]} />
                    </Map>
                </YMaps>
            </div>

            <SendApplicationBlock university={university}/>

            {
                props.universitiesFromThisCountry.length!=0 && (
                    <div className={styles.universitiesWrapper}>
                        <TitleBlock img={'/notebook-dynamic-color.png'} title={`Еще универститы из этой страны`}/>
                        <div className={styles.wrapper}>
                            {
                                props.universitiesFromThisCountry.map((univer) => {
                                    if(univer.id === university.id) {
                                        return <UniverCard univer={univer} this={true}/>
                                    } else {
                                        return <UniverCard univer={univer}/>
                                    }
                                })
                            }
                        </div>

                        {
                            props.universitiesFromThisCountry.length!=0 && (
                                <div className={styles.flex}>
                                    <a className={styles.link} href="/universities">Все университеты</a>
                                </div>
                            )
                        }
                    </div>
                )
            }

            <Footer/>
            <style jsx global>
                {`
                  body {
                    margin: 0px;
                    padding: 0px;
                  }
                `}
            </style>
        </div>
    )
}

University.getInitialProps = async (ctx) => {
    if(ctx.query.id !== undefined) {
        const api = new API()

        let university = await api.getUniversityById(ctx.query.id)
        console.log('getInitialProps OK', university)

        let universitiesFromThisCountry = await api.getUniversityByCountryId(university.country_id)

        return {
            university: university,
            universitiesFromThisCountry: universitiesFromThisCountry
        }
    } else {
        console.log('getInitialProps NOT Ok')
        return {};
    }
}

export default University;