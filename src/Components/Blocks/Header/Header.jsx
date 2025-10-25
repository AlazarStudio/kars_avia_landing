import React from "react";
import classes from './Header.module.css';

function Header({ children, ...props }) {
    return (
        <header className={classes.header}>
            <div className={classes.top}>
                <div className={classes.headerLogo}>
                    <img src="/logo_header.png" alt="" />
                </div>
                <ul className={classes.headerLinks}>
                    <li><a href="#">Цены</a></li>
                    <li><a href="#">Документация</a></li>
                    <li><a href="#">Поддержка</a></li>
                </ul>
                <div className={classes.headerBtns}>
                    <a href="#" className={classes.fill}>Получить демо-версию</a>
                    <a href="#" className={classes.outline}>Войти</a>
                </div>
            </div>

            <ul className={classes.bottom}>
                <li>
                    <a href="#">
                        Заявки
                        <img src="link1.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Диспетчеры
                        <img src="link2.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Размещения
                        <img src="link3.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Авиакомпании
                        <img src="link4.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Аналитика
                        <img src="link5.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#" className={classes.long}>
                        Договоры и отчётность
                        <img src="link6.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#" className={classes.middle}>
                        Пользователи и безопасность
                        <img src="link7.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Трансфер
                        <img src="link8.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Представительства
                        <img src="link9.png" alt="" />
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header;