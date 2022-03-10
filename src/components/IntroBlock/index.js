import styles from './style.module.css'
import {Image} from "react-bootstrap";
import {CSSTransition} from "react-transition-group";
import {useEffect, useState} from "react";
import classnames from 'classnames'

const IntroBlock = () => {

    const [showLeftSide, setShowLeftSide] = useState(false)
    const [showRightSide, setShowRightSide] = useState(false)


    useEffect(()=>{
        setTimeout(()=>setShowLeftSide(true), 300)
        setTimeout(()=>setShowRightSide(true), 600)
    }, [])

    return (
        <div className={styles.container}>
            <div className={classnames(showLeftSide ? styles.show : styles.hide ,styles.leftSide)}>
                <div>
                    <span className={classnames(styles.title)}>
                        <span style={{color: '#085df2'}}>Как</span> поступить на
                        <span style={{color: '#085df2'}}> высшее</span> за
                        <span style={{color: '#085df2'}}> границу</span>?
                    </span>

                    <span className={classnames(styles.subtitle)}>
                        Qalai.kz - расскажем и покажем о том как поступить в Европу.  <br/>
                        На нашей платформе собрана вся информация о зарубежных универститетах. <br/>
                        Предоставляем услуги полного сопровождения на поступление.
                    </span> <br/> <br/>
                    <a href="/services" className={styles.btn}>Перейти к услугам</a>
                </div>
            </div>
            <div className={classnames(showRightSide ? styles.show : styles.hide ,styles.rightSide)}>
                <Image src={'/main.png'} className={styles.image}/>
            </div>
        </div>
    )
}

export default IntroBlock;