import React from "react";
import classes from './Moduls.module.css';

function Moduls({ children, setDemoOpen, ...props }) {
    return (
        <>
            <a className={classes.mobileMargin} id="applications"></a>
            <div className={classes.modulFill}>
                <div className={classes.modul_title}>Модуль заявок</div>
                <div className={classes.modul_desc}>Создавайте заявки на размещение экипажей напрямую в системе.</div>
                <div className={classes.modul_img}>
                    <img src="/modul_zayavok.png" alt="" className={classes.modul_imgPC} />
                    <img src="/modul_zayavok_mobile.png" alt="" className={classes.modul_imgMOB} />
                </div>
            </div>

            <a className={classes.mobileMargin} id="dispatchers"></a>
            <div className={classes.modulOutline}>
                <div className={classes.modul_dispetcher_title}>
                    <div className={classes.modul_dispetcher_title_left}>
                        <div className={classes.modul_title}>Модуль диспетчеризации</div>
                        <div className={classes.modul_desc}>Ваши заявки обрабатываются мгновенно:</div>
                    </div>
                    <div className={`${classes.modul_dispetcher_title_right} ${classes.dn}`}>
                        Карс Авиа минимизирует человеческий фактор и оптимизирует процессы организации эстафеты и ФАП 82 в разы
                    </div>
                </div>

                <div className={`${classes.modul_dispetcher_steps} ${classes.mng}`}>
                    <div className={classes.modul_dispetcher_steps_item}>
                        Система автоматически направляет их диспетчеру
                    </div>

                    <div className={classes.line}>
                        <img src="line_dashed.png" alt="" />
                    </div>

                    <div className={classes.lineVertical}>
                        <img src="line_dashed_vertical.png" alt="" />
                    </div>

                    <div className={classes.modul_dispetcher_steps_item}>
                        Вы видите статус на каждом этапе — «создана», «в работе», «подтверждена», «завершена»
                    </div>

                    <div className={classes.line}>
                        <img src="line_dashed.png" alt="" />
                    </div>

                    <div className={classes.lineVertical}>
                        <img src="line_dashed_vertical.png" alt="" />
                    </div>

                    <div className={classes.modul_dispetcher_steps_item}>
                        Все действия фиксируются и доступны для контроля и аудита
                    </div>
                </div>

                <div className={classes.modul_dispetcher_img}>
                    <img src="modul_dipetchirizacii.png" alt="" />
                </div>

                <div className={`${classes.modul_dispetcher_title_right} ${classes.dnm}`}>
                    KarsAvia устраняет человеческий фактор и ускоряет процесс размещения экипажа в разы
                </div>
            </div>

            <a className={classes.mobileMargin} id="placements"></a>
            <div className={classes.modulFill}>
                <div className={classes.modul_title}>Модуль размещения (интеграция с гостиницами)</div>
                <div className={classes.modul_bottom}>
                    <div className={classes.modul_bottom_left}>
                        <div className={classes.modul_bottom_left_desc}>
                            Диспетчеры KarsAvia напрямую работают
                            с проверенными гостиницами по всей России.
                            Авиакомпания получает:
                        </div>
                        <ul className={classes.modul_bottom_left_list}>
                            <li>
                                <img src="hotelsList1.png" alt="" />
                                <span>Актуальный список доступных отелей, прошедших сертификацию и проверку</span>
                            </li>
                            <li>
                                <img src="hotelsList2.png" alt="" />
                                <span>Прозрачный процесс подбора — без переписки и ожидания подтверждения</span>
                            </li>
                            <li>
                                <img src="hotelsList3.png" alt="" />
                                <span>Автоматическое уведомление о размещении и деталях бронирования</span>
                            </li>
                            <li>
                                <img src="hotelsList4.png" alt="" style={{ width: '28px', height: '28px' }} />
                                <span>Цены по всем услугам  ниже рынка от 15% (спецтарифы)</span>
                            </li>
                        </ul>
                        <div className={classes.modul_bottom_left_boldDesk}>
                            Все данные фиксируются в едином журнале, а статусы обновляются в реальном времени.
                        </div>
                        <div className={classes.modul_bottom_left_colorDesk}>
                            Все гостиницы проходят проверку
                            и соответствуют стандартам размещения авиаперсонала
                        </div>
                    </div>
                    <div className={classes.modul_bottom_right}>
                        <img src="modul_razmeshenia.png" alt="" />
                    </div>
                </div>
            </div>

            <a className={classes.mobileMargin} id="airlines"></a>
            <div className={classes.modul}>
                <div className={classes.modul_title}>Модуль авиакомпаний</div>
                <div className={classes.modul_desc}>Единое пространство для управления персоналом и проживанием:</div>

                <ul className={classes.modulList}>
                    <li>
                        <div className={classes.modulListTitle}>
                            <div className={classes.modulListTitle_num}>01</div>
                            <div className={classes.modulListTitle_text}>
                                Учёт состава экипажей (командиры, пилоты, бортпроводники и т.д.)
                            </div>
                        </div>
                        <div className={classes.modulList_img}>
                            <img src="modul_aviakompanyi_1.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className={classes.modulListTitle}>
                            <div className={classes.modulListTitle_num}>02</div>
                            <div className={classes.modulListTitle_text}>
                                Быстрый поиск по рейсам, датам и сотрудникам
                            </div>
                        </div>
                        <div className={classes.modulList_img}>
                            <img src="modul_aviakompanyi_2.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className={classes.modulListTitle}>
                            <div className={classes.modulListTitle_num}>03</div>
                            <div className={classes.modulListTitle_text}>
                                Визуализация размещения через шахматку — кто, где и когда проживает
                            </div>
                        </div>
                        <div className={classes.modulList_img}>
                            <img src="modul_aviakompanyi_3.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className={classes.modulListTitle}>
                            <div className={classes.modulListTitle_num}>04</div>
                            <div className={classes.modulListTitle_text}>
                                Контроль занятости и истории размещений по каждому члену экипажа
                            </div>
                        </div>
                        <div className={classes.modulList_img}>
                            <img src="modul_aviakompanyi_4.png" alt="" />
                        </div>
                    </li>
                </ul>

                <div className={classes.modulBottomBlue}>
                    Система помогает планировать смены
                    и исключать пересечения при размещении
                </div>
            </div>

            <a className={classes.mobileMargin} id="analytics"></a>
            <div className={classes.modul}>
                <div className={classes.modul_title}>Модуль аналитики</div>
                <div className={classes.modul_desc}>Вся статистика — в одном месте:</div>

                <ul className={classes.modulList}>
                    <li>
                        <div className={classes.modulListTitle}>
                            <div className={classes.modulListTitle_num}>01</div>
                            <div className={classes.modulListTitle_text}>
                                Количество и динамика заявок
                            </div>
                        </div>
                        <div className={classes.modulList_img}>
                            <img src="modul_analitiky_1.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className={classes.modulListTitle}>
                            <div className={classes.modulListTitle_num}>02</div>
                            <div className={classes.modulListTitle_text}>
                                Среднее время обработки
                            </div>
                        </div>
                        <div className={classes.modulList_img}>
                            <img src="modul_analitiky_2.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className={classes.modulListTitle}>
                            <div className={classes.modulListTitle_num}>03</div>
                            <div className={classes.modulListTitle_text}>
                                Рейтинг гостиниц по скорости и качеству обслуживания
                            </div>
                        </div>
                        <div className={classes.modulList_img}>
                            <img src="modul_analitiky_3.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className={classes.modulListTitle}>
                            <div className={classes.modulListTitle_num}>04</div>
                            <div className={classes.modulListTitle_text}>
                                Количество дублированных заявок
                            </div>
                        </div>
                        <div className={classes.modulList_img}>
                            <img src="modul_analitiky_4.png" alt="" />
                        </div>
                    </li>
                </ul>

                <div className={classes.modulBottomBlue}>
                    Аналитика помогает авиакомпании контролировать эффективность работы, расходы на проживание и качество сервиса.
                </div>
            </div>

            <a className={classes.mobileMargin} id="contracts_and_reporting"></a>
            <div className={classes.modulFill}>
                <div className={classes.modul_title}>Модуль договоров и отчётности</div>
                <div className={classes.modul_desc}>Все документы — в цифровом виде:</div>

                <div className={classes.modul_dispetcher_steps}>
                    <div className={`${classes.modul_dispetcher_steps_item} ${classes.stepsUpd}`}>
                        <img src="modul_dogovorov_1.png" alt="" />
                        Хранение и быстрый доступ к договорам и приложениям
                    </div>
                    <div className={`${classes.modul_dispetcher_steps_item} ${classes.stepsUpd}`}>
                        <img src="modul_dogovorov_2.png" alt="" />
                        Выгрузка реестров размещений и актов за период
                    </div>
                    <div className={`${classes.modul_dispetcher_steps_item} ${classes.stepsUpd}`}>
                        <img src="modul_dogovorov_3.png" alt="" />
                        Автоматическая генерация отчётов в Excel или PDF
                    </div>
                </div>

                <div className={`${classes.modulBottomBlue} ${classes.modulBottomBlueUpd}`}>
                    Ваш бухгалтер и юридический отдел всегда имеют под рукой актуальные документы без участия диспетчеров
                </div>
            </div>

            <a className={classes.mobileMargin} id="users_and_security"></a>
            <div className={classes.modulFill}>
                <div className={classes.modul_title}>Модуль пользователей и безопасности</div>
                <div className={classes.modul_desc}>KarsAvia учитывает внутреннюю структуру авиакомпании:</div>

                <div className={classes.modul_dispetcher_steps}>
                    <div className={`${classes.modul_dispetcher_steps_item} ${classes.stepsUpd}`}>
                        <img src="modul_users_1.png" alt="" />
                        Разные уровни доступа для менеджеров, отделов и руководства
                    </div>
                    <div className={`${classes.modul_dispetcher_steps_item} ${classes.stepsUpd}`}>
                        <img src="modul_users_2.png" alt="" />
                        История действий пользователей
                    </div>
                    <div className={`${classes.modul_dispetcher_steps_item} ${classes.stepsUpd}`}>
                        <img src="modul_users_3.png" alt="" />
                        Надёжная авторизация и защита данных
                    </div>
                </div>

                <div className={`${classes.modulBottomBlue} ${classes.modulBottomBlueUpd}`}>
                    Вы полностью контролируете, кто и какие данные видит.
                </div>
            </div>

            <a className={classes.mobileMargin} id="transfer"></a>
            <div className={classes.modul}>
                <div className={classes.modul_title}>Модуль трансфера</div>
                <div className={classes.modul_desc}>Организация перемещений экипажей «под рейс»:</div>

                <ul className={classes.modulList}>
                    <li>
                        <div className={classes.modulListTitle}>
                            <div className={classes.modulListTitle_num}>01</div>
                            <div className={classes.modulListTitle_text}>
                                Заявки на трансфер с маршрутом, временем подачи, вместимостью
                            </div>
                        </div>
                        <div className={classes.modulList_img}>
                            <img src="modul_transfer_1.png" alt="" />
                        </div>
                    </li>
                    <li className={classes.modulTransferNum2}>
                        <div className={classes.modulTransferNum2_title}>
                            <div className={classes.modulListTitle}>
                                <div className={classes.modulListTitle_num}>02</div>
                                <div className={classes.modulListTitle_text}>
                                    Автоматический подбор подходящих ТС с учётом ETA и ограничений
                                </div>
                            </div>
                        </div>
                        <div className={classes.modulTransferNum2_img}>
                            <img src="modul_transfer_2.png" alt="" />
                        </div>
                    </li>
                    <li className={classes.modulTransferUpd}>
                        <div className={classes.modulListTitle}>
                            <div className={classes.modulListTitle_num}>03</div>
                            <div className={classes.modulListTitle_text}>
                                Подтверждения, статусы и уведомления в реальном времени
                            </div>
                        </div>

                        <div className={classes.modulListTitle}>
                            <div className={classes.modulListTitle_num}>04</div>
                            <div className={classes.modulListTitle_text}>
                                Контроль выполнения и фиксация опозданий по SLA
                            </div>
                        </div>

                        <div className={classes.modulListTitle}>
                            <div className={classes.modulListTitle_num}>05</div>
                            <div className={classes.modulListTitle_text}>
                                Единый реестр поездок для план-факт и закрывающих документов
                            </div>
                        </div>
                    </li>
                </ul>

                <div className={`${classes.modulBottomBlue} ${classes.modulBottomBlueUpdTransfer}`}>
                    <div className={classes.modulBottomBlue_title}>Результат:</div>
                    <div className={classes.modulBottomBlue_text}>
                        меньше простоев, предсказуемая логистика «аэропорт ⟺ отель ⟺ база/аэродром».
                    </div>
                </div>
            </div>

            <a className={classes.mobileMargin} id="representative"></a>
            <div className={classes.modulOutline}>
                <div className={classes.modul_title}>Модуль представительств <br />(пассажиры и внештатные ситуации)</div>
                <div className={classes.modul_desc}>Оперативная работа на местах и при IRROPs:</div>

                <div className={`${classes.modul_dispetcher_steps} ${classes.stepsTopUpd}`}>
                    <div className={`${classes.modul_dispetcher_steps_item} ${classes.stepsUpd4}`}>
                        <img src="modul_predstaviteli_1.png" alt="" />
                        Заявки на экстренное размещение пассажиров, трансфер, питание и воду
                    </div>
                    <div className={`${classes.modul_dispetcher_steps_item} ${classes.stepsUpd4}`}>
                        <img src="modul_predstaviteli_2.png" alt="" />
                        Выдача услуг по штрих-коду/QR билета или посадочного
                    </div>
                    <div className={`${classes.modul_dispetcher_steps_item} ${classes.stepsUpd4}`}>
                        <img src="modul_predstaviteli_3.png" alt="" />
                        Тайм-линия событий: подача транспорта, заселение, выдача питания
                    </div>
                    <div className={`${classes.modul_dispetcher_steps_item} ${classes.stepsUpd4}`}>
                        <img src="modul_predstaviteli_4.png" alt="" />
                        Мобильный интерфейс для сотрудников представительства
                    </div>
                </div>

                <div className={`${classes.modulBottomBlue} ${classes.modulBottomBlueUpd}`}>
                    Вы получаете полную картину: кто, когда и что получил, без ручного свода и расхождений.
                </div>
            </div>

            <div className={classes.mobileMargin}></div>
            <div className={classes.modulFill}>
                <div className={classes.whyChoose}>
                    <div className={classes.whyChoose_left}>
                        <img src="whyChoose.png" alt="" />
                    </div>
                    <div className={classes.whyChoose_right}>
                        <div className={classes.whyChoose_right_title}>Почему авиакомпании выбирают KarsAvia</div>

                        <ul>
                            <li>
                                <div className={classes.colorBlock}>
                                    <img src="whyChoose_1.png" alt="" />
                                </div>
                                <div className={classes.infoBlock}>Сокращение времени обработки заявок в несколько раз</div>
                            </li>
                            <li>
                                <div className={classes.colorBlock}>
                                    <img src="whyChoose_2.png" alt="" />
                                </div>
                                <div className={classes.infoBlock}>Полный контроль и прозрачность всех процессов размещения</div>
                            </li>
                            <li>
                                <div className={classes.colorBlock}>
                                    <img src="whyChoose_3.png" alt="" />
                                </div>
                                <div className={classes.infoBlock}>Актуальная аналитика по загрузке и затратам</div>
                            </li>
                            <li>
                                <div className={classes.colorBlock}>
                                    <img src="whyChoose_4.png" alt="" />
                                </div>
                                <div className={classes.infoBlock}>Безопасное хранение данных и разграничение прав доступа</div>
                            </li>
                            <li>
                                <div className={classes.colorBlock}>
                                    <img src="whyChoose_5.png" alt="" />
                                </div>
                                <div className={classes.infoBlock}>Проверенные гостиницы и надёжные партнёры по всей России</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={classes.mobileMargin}></div>
            <div className={classes.modulFill}>
                <div className={classes.modul_kars_title}>
                    KarsAvia — надёжная цифровая среда <br /> для вашей авиакомпании
                </div>
                <div className={classes.modul_kars_desc}>
                    Оцифруйте управление экипажами и получите контроль, скорость и прозрачность, которых невозможно достичь при ручной работе.
                </div>
                <div onClick={() => { setDemoOpen(true) }} target="_blank" className={classes.modul_kars_btn}>Получить демо-версию</div>
            </div>
        </>
    );
}

export default Moduls;