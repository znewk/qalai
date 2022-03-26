import Head from "next/head";
import styles from "./main.module.css"
import Header from "../src/components/Header";
import IntroBlock from "../src/components/IntroBlock";
import WhatDoYouNeed from "../src/components/WhatDoYouNeed";
import TopUniversitiesBlock from "../src/components/TopUniversitiesBlock";
import {useEffect, useState} from "react";
import axios from 'axios'
import API from "../src/api";
import Footer from "../src/components/Footer";

const Index = () => {

    const api = new API()

    const [universities, setUniversities] = useState([])
    const [unversitiesLoading, setUniversitiesLoading] = useState(true)

    const loadUniversities = async () => {
        const universities = await api.getUniversities()
        setUniversities(universities)
        setUniversitiesLoading(false)
    }

    useEffect(async ()=>{
        loadUniversities()
    }, [])

    return(
        <div>
            <Head>
                <title>Qalai</title>
                <link rel="icon" href="/icon.png" />
            </Head>

            <Header main={true}/>

            <IntroBlock/>
            <WhatDoYouNeed/>
            <TopUniversitiesBlock universities={universities} unversitiesLoading={unversitiesLoading}/>

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

export default Index;