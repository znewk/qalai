import styles from './style.module.css'

const ServicesDescList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.listItem}>
                <span className={styles.title}>Кому подойдет эта услуга</span> <br/> <br/>
                <span className={styles.subtitle}>«Полное сопровождение» будет особенно полезно, если вы:</span>
                <ul>
                    <li className={styles.subtitle}>хотите повысить шансы на поступление;</li>
                    <li className={styles.subtitle}>не уверены в своих силах;</li>
                    <li className={styles.subtitle}>не знаете, с чего начать;</li>
                    <li className={styles.subtitle}>не знакомы с тонкостями поступления за рубеж;</li>
                    <li className={styles.subtitle}>хотите уделить больше времени подготовке к экзаменам;</li>
                    <li className={styles.subtitle}>не обладаете «сильным» портфолио;</li>
                    <li className={styles.subtitle}>собираетесь поступать в топовые мировые вузы.</li>
                </ul>
            </div> <br/>
            <div className={styles.listItem}>
                <span className={styles.title}>Преимущества «Полного сопровождения»</span> <br/>
                <ul>
                    <li className={styles.subtitle}>
                        <b>Просто и ясно. </b>
                        Наши сотрудники проведут вас за руку прямо к зачислению.
                        Личный ментор будет заниматься вашей заявкой, подбирать программы,
                        объяснять требования, следить за соблюдением дедлайнов,
                        направлять документы и вести переговоры с вузом. А креативный редактор проанализирует ваш опыт,
                        достижения и выделит сильные стороны. На их основе он поможет составить резюме, эссе,
                        мотивационные и рекомендательные письма.</li>
                    <li className={styles.subtitle}>
                        <b>Идеальная заявка. </b>
                        Благодаря опыту мы знаем наверняка, что вузы ожидают от абитуриентов,
                        и поэтому подготовим максимально сильную заявку.
                    </li>
                    <li className={styles.subtitle}>
                        <b>Индивидуальная стратегия. </b>
                        Ментор составит для вас индивидуальную стратегию поступления на каждую программу.
                        Она будет описывать весь процесс в мельчайших деталях — вплоть до того,
                        какие грамоты указывать в резюме. Вы сможете отслеживать прогресс и будете спокойны,
                        что все идет по плану.
                    </li>
                    <li className={styles.subtitle}>
                        <b>Широкий выбор вузов. </b>
                        Наши менторы знакомы со спецификой образования по всему миру.
                        Это позволяет нам курировать поступление сразу в несколько стран:
                        сравнивать требования, стоимость, периоды подачи заявок и получения ответов.
                        Мы сразу исключаем те варианты, которые вам не подходят — по академическому опыту или
                        личным предпочтениям.
                    </li>
                </ul>
            </div> <br/>
            <div className={styles.listItem}>
                <span className={styles.title}>Этапы поступления с Qalai</span> <br/><br/>
                <span className={styles.subtitle}><b>01 Бесплатная консультация</b></span>
                <ul>
                    <li className={styles.subtitle}>Познакомимся с вами и узнаем о ваших предпочтениях</li>
                    <li className={styles.subtitle}>Определим шансы на поступление</li>
                    <li className={styles.subtitle}>Предложим страны, подходящие под ваш запрос, успеваемость и бюджет</li>
                    <li className={styles.subtitle}>Расскажем, что потребуется для поступления</li>
                </ul>
                <span className={styles.subtitle}><b>02 Заключение договора</b></span>
                <ul>
                    <li className={styles.subtitle}>Зафиксируем критерии для подбора программ</li>
                    <li className={styles.subtitle}>Согласуем условия договора</li>
                </ul>
                <span className={styles.subtitle}><b>03 Поиск программ</b></span>
                <ul>
                    <li className={styles.subtitle}>Проведем поиск программ по вашим критериям</li>
                    <li className={styles.subtitle}>Подберем самые подходящие, по которым начнем работу</li>
                </ul>
                <span className={styles.subtitle}><b>04 Процесс поступления</b></span>
                <ul>
                    <li className={styles.subtitle}>Составим для вас личную стратегию</li>
                    <li className={styles.subtitle}>Дадим пошаговую инструкцию по каждому документу: где получить, куда обратиться, как заполнить</li>
                    <li className={styles.subtitle}>Уточним, какие экзамены нужно сдавать и когда</li>
                    <li className={styles.subtitle}>Определим ваши преимущества как абитуриента и раскроем их в мотивационных письмах</li>
                    <li className={styles.subtitle}>Будем вести переговоры с вузом, лоббировать ваши интересы и сообщать о продвижении по плану</li>
                    <li className={styles.subtitle}>Заполним и отправим заявки</li>
                    <li className={styles.subtitle}>Подготовим и подадим заявку на получение стипендии от вуза</li>
                    <li className={styles.subtitle}>Проконсультируем по прохождению интервью в университете</li>
                </ul>
                <span className={styles.subtitle}><b>05 Зачисление</b></span>
                <ul>
                    <li className={styles.subtitle}>Будем следить за обратной связью от вузов</li>
                    <li className={styles.subtitle}>Сообщим, когда придут приглашения</li>
                    <li className={styles.subtitle}>Поможем выбрать самый оптимальный вариант</li>
                </ul>
            </div> <br/>
            <div className={styles.listItem}>
                <span className={styles.title}>Какие документы входят в услугу</span> <br/> <br/>
                <span className={styles.subtitle}>В рамках услуги наши специалисты помогут составить и отредактировать:</span>
                <ul>
                    <li className={styles.subtitle}>мотивационное письмо,</li>
                    <li className={styles.subtitle}>рекомендательные письма от преподавателей или работодателей,</li>
                    <li className={styles.subtitle}>академическое резюме или CV,</li>
                    <li className={styles.subtitle}>заявку в вуз.</li>
                </ul>
            </div> <br/>
            <div className={styles.listItem}>
                <span className={styles.title}>Стоимость услуги</span> <br/> <br/>
                <span className={styles.subtitle}>Итоговая сумма зависит от количества программ, по которым мы будем работать. Подача на два разных направления в одном вузе считается подачей на две разных программы.</span>
                <ul>
                    <li className={styles.subtitle}>Количество программ	1 - 789 USD</li>
                    <li className={styles.subtitle}>Количество программ	2 - 1,238 USD</li>
                    <li className={styles.subtitle}>Количество программ	3 - 1,687 USD</li>
                    <li className={styles.subtitle}>Количество программ	4 - 2,136 USD</li>
                    <li className={styles.subtitle}>Количество программ	5 - 2,585 USD</li>
                </ul>
            </div>
        </div>
    )
}

export default ServicesDescList;