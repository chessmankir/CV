import "@/src/scss/experience.scss";

export default function ExperiencePage() {
    const education = [
        {
            title: "Юго западный технический университет",
            subtitle: "Окончил по специальности \"Программное обеспечение автоматизированных систем\" с красным дипломом.\n" +
                "За высокую успеваемость и участие в исследовательской деятельности был награжден губернаторской стипендией\n" +
                "\n",
            period: "2007-2012",
        },
        {
            title: `Нетология, Курсы "React JS"`,
            subtitle: "Повышал кваллификацию фронтендера для использования современных технологий ",
            period: "2017",
        },
    ];

    const experience = [
        {
            title: "Fullstack Web Development",
            company: "Веб студия Rusweb",
            period: "2012 — 2015",
            tasks: [
                "В данном Web-студии я создавал сайты под ключи на CMS Drupal + PHP. Из больших порталов клиентам были журнал" +
                "\"Самая\" и портал для молодых мам \"mamaexpert.ru\". А также занимался переносом старых сайтов на более новую версиию" +
                "CMS и адаптации их функционала под современные тренды. ",
            ],
        },
        {
            title: "Fullstack and mobile development",
            company: "Mandrin",
            period: "2016-2019",
            tasks: [
                "Производился запуск нового финтеха https://mandarin.io/. И я полностью занимался личным кабинетом пользователя. Изначально я попал" +
                "из за знания Drupal так первая версия выполнялось. Моя задача было оптимизировать личный кабинет пользователя. Скорость его загрузки сократилось с 20с до 1с." +
                "Также надо было выводить транзакции, фильтровать их по большому количеству фильтров. Выводить годовую, месячную активность." +
                "А также заниматься генерацией документов на основе данных и проведенных финансовых операций.",
            ],
        },
        {
            title: "Fullstack Web Development",
            company: "Freelance",
            period: "2025-2026",
            tasks: [
                "Занимался написанием бота для игрового комьюнити. Бот регистрировал пользователей, искал людей в одном городе, выводил" +
                "информацию о пользователях. А также полностью администрировал работу админов комьюнити: вход, выход, поиск пользователей," +
                "проведение турниров и так далее." +
                "В последствие было создано мобильное приложение на основе построенного функционала.",
            ],
        },
    ];

    return (
        <section id="projects" className="block resume-block">
            <h2>Опыт</h2>
            <div className="accent" />

            <div className="resume-section">
                <div className="resume-title">
                    <div className="resume-icon">▤</div>
                    <h3>Обучение</h3>
                </div>

                <div className="timeline">
                    {education.map((item) => (
                        <div className="timeline-item" key={item.title}>
                            <h4>{item.title}</h4>
                            <p>{item.subtitle}</p>
                            <span>{item.period}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="resume-section">
                <div className="resume-title">
                    <div className="resume-icon">▤</div>
                    <h3>Стаж</h3>
                </div>

                <div className="timeline">
                    {experience.map((item) => (
                        <div className="timeline-item" key={item.title}>
                            <h4>{item.title}</h4>
                            <p>{item.company}</p>
                            <span>{item.period}</span>
                          {/*  <em>{item.location}</em>*/}

                            <ul>
                                {item.tasks.map((task) => (
                                    <li key={task}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}