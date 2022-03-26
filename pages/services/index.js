import styles from './services.module.css'
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Head from "next/head";
import TitleBlock from "../../src/components/TitleBlock";
import ServicesDescList from "../../src/components/ServicesDescList";

const Services = () => {
    return (
        <div>
            <Header services={true}/>
            <Head>
                <title>Qalai - Услуги</title>
                <link rel="icon" href="/icon.png" />
            </Head>

            <div style={{width: '100%', marginTop: '100px', padding: '0 5%', boxSizing: 'border-box'}}>
                <TitleBlock img={'/fire-dynamic-color.png'} title={'Полное сопровождение поступления в университет'}/>
            </div>
            <div className={styles.introBlock}>
                <span className={styles.introDesc}>
                    Поступать за границу сложно и времязатратно.
                    Студентам приходится проверять информацию по десяткам вузов,
                    разбираться с требованиями, учиться составлять документы,
                    писать мотивационные письма и рекомендации.
                    Чтобы облегчить задачу, мы поможем пройти через весь процесс поступления,
                    начиная с выбора страны и заканчивая получением приглашения от университета.
                </span>
            </div>

            <ServicesDescList/>

            <Footer/>
        </div>
    )
}

export default Services;