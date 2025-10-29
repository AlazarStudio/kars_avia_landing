import React from "react";
import classes from './Price.module.css';

function Price({ children, ...props }) {
    return (
        <div className={classes.price}>
            <div className={classes.price_center}>
                <div className={classes.price_left}>
                    <div className={classes.price_left_title}>Цены</div>
                    <div className={classes.price_left_desk}>
                        Условия использования программного обеспечения “KarsAvia”:
                    </div>
                    <div className={classes.price_left_list}>
                        <ul>
                            <li>
                                <img src="arrowsList.png" alt="" />
                                <div className={classes.price_left_list_text}>
                                    Программное обеспечение “KarsAvia” предоставляется авиакомпаниям, гостиницам и транспортным организациям по лицензионному договору (не в открытом доступе).
                                </div>
                            </li>
                            <li>
                                <img src="arrowsList.png" alt="" />
                                <div className={classes.price_left_list_text}>
                                    Доступ к системе осуществляется после заключения договора с правообладателем.
                                </div>
                            </li>
                            <li>
                                <img src="arrowsList.png" alt="" />
                                <div className={classes.price_left_list_text}>
                                    Информация о стоимости и условиях предоставления лицензии предоставляется по запросу.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.price_right}>
                    <div className={classes.price_right_title}>Контакты для получения коммерческого предложения:</div>
                    <a href="mailto:info@karsavia.ru" className={classes.price_right_link}>
                        <img src="mail.png" alt="" />
                        info@karsavia.ru
                    </a>
                    <a href="tel:88005500488" className={classes.price_right_link}>
                        <img src="phone.png" alt="" />
                        8-800-550-04-88
                    </a>
                    <div className={classes.price_right_karsavia}>
                        Правообладатель: ООО «KarsAvia» <br />
                        ИНН ХХХХХХХХХХ, ОГРН ХХХХХХХХХХХХХ
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Price;