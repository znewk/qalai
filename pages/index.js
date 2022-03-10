import Head from "next/head";
import styles from "./main.module.css"
import Header from "../src/components/Header";
import IntroBlock from "../src/components/IntroBlock";
import WhatDoYouNeed from "../src/components/WhatDoYouNeed";

const Index = () => {
    return(
        <div>
            <Head>
                <title>Qalai</title>
                <link rel="icon" href="/icon.png" />
            </Head>

            <Header main={true}/>
            <IntroBlock/>
            <WhatDoYouNeed/>

        </div>
    )
}

export default Index;