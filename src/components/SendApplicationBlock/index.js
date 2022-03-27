import styles from './style.module.css'
import {Image} from "react-bootstrap";
import {useState} from "react";
import API from "../../api";

const SendApplicationBlock = ({university, ...props}) => {
    const api = new API()

    const sendApplication = async (name, phone) => {
        // const req = await api.createApplication(name, phone)

        setState('Заявка успешно отправлена! Ожидайте звонка.')
    }

    const [state, setState] = useState('')

    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')

    return (
        <div className={styles.container}>
            <span className={styles.title}>
                Я ВЫБИРАЮ ЭТОТ ВУЗ
            </span> <br/>
            <span className={styles.subtitle} style={{marginTop: '-32px'}}>Хотите поступить в данное учебное заведение по нашей программе?</span>
            <br/> <br/> <br/>
            <span className={styles.subtitle}>
                <span style={{fontSize: 24, margin: '25px 0', fontFamily: 'Rubik Bold'}}>
                    Получите БЕСПЛАТНУЮ консультацию для поступления в "{university.title}". <br/>
                    Заполните заявку ниже и наши менеджеры свяжутся с вами в кротчайщие сроки!
                </span> <br/>
                Более подробно ознакомится с нашими услугами можете <a href="/services" className={styles.link}>здесь.</a> <br/>
            </span> <br/> <br/>
            <div className={styles.form}>
                <div className={styles.inputs}>
                    <input type="text" placeholder={"Иванов Иван Иванович"} onChange={e => setName(e.target.value)} className={styles.input}/>
                    <input type="number" placeholder={"+7 (777) 777-77-77"} onChange={e => setPhone(e.target.value)} className={styles.input}/>
                </div>
                <button
                    onClick={()=>{
                        sendApplication(name, phone)
                    }}
                    className={styles.btn}
                >Поступаю</button>

                <span style={{color: 'white', fontFamily: 'Rubik Regular', marginTop: '15px', display: 'block'}}>{state}</span>
            </div>
        </div>
    )
}

export default SendApplicationBlock;