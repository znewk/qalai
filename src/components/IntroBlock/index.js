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
                        <span style={{color: '#085df2'}}>Не можешь</span> определиться какой
                        <span style={{color: '#085df2'}}> ВУЗ</span>
                        <span style={{color: '#085df2'}}> выбрать</span>?
                    </span>

                    <span className={classnames(styles.subtitle)}>
                        Qalai.kz - поможем сделать правильный выбор.  <br/>
                        На нашей платформе собрана вся информация об универститетах Европы и СНГ. <br/>
                        Предоставляем услуги полного сопровождения на поступление.
                    </span> <br/> <br/>
                    <a href="/universities" className={styles.btn}>Университеты</a>
                </div>
            </div>
            <div className={classnames(showRightSide ? styles.show : styles.hide ,styles.rightSide)}>
                <Image src={'/main.png'} className={styles.image}/>
            </div>
        </div>
    )
}

export default IntroBlock;