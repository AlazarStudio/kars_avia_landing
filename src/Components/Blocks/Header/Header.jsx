import React, { useState } from "react";
import classes from './Header.module.css';


function Header({ children, ...props }) {
    const [showMenu, setMenu] = useState(false);

    return (
        <>
            <header className={classes.header}>
                <div className={classes.top}>
                    <a href="/" className={classes.headerLogo}>
                        <img src="/logo_header.png" alt="" />
                    </a>
                    <ul className={classes.headerLinks}>
                        {/* <li><a href="/price">Цены</a></li>
                        <li><a href="/documentation">Документация</a></li>
                        <li><a href="/support">Поддержка</a></li> */}
                        <li><a href="/price">Цены</a></li>
                        <li><a href="/">Документация</a></li>
                        <li><a href="/">Поддержка</a></li>
                    </ul>
                    <div className={classes.headerBtns}>
                        <a href="https://demo.karsavia.ru" target="_blank" className={classes.fill}>Получить демо-версию</a>
                        <a href="https://karsavia.ru" target="_blank" className={classes.outline}>Войти</a>
                    </div>

                    <div className={classes.headerMenu} onClick={() => setMenu(!showMenu)}>
                        <img src="menu.png" alt="" />
                    </div>
                </div>

                <ul className={`${classes.bottom} ${classes.dnm}`}>
                    <li><a href="#applications">Заявки<img src="link1.png" alt="" /></a></li>
                    <li><a href="#dispatchers">Диспетчеры<img src="link2.png" alt="" /></a></li>
                    <li><a href="#placements">Размещения<img src="link3.png" alt="" /></a></li>
                    <li><a href="#airlines">Авиакомпании<img src="link4.png" alt="" /></a></li>
                    <li><a href="#analytics">Аналитика<img src="link5.png" alt="" /></a></li>
                    <li><a href="#contracts_and_reporting" className={classes.long}>Договоры и отчётность<img src="link6.png" alt="" /></a></li>
                    <li><a href="#users_and_security" className={classes.middle}>Пользователи и безопасность<img src="link7.png" alt="" /></a></li>
                    <li><a href="#transfer">Трансфер<img src="link8.png" alt="" /></a></li>
                    <li><a href="#representative">Представительства<img src="link9.png" alt="" /></a></li>
                </ul>
            </header>

            <div className={classes.mobileHeader} style={{ display: `${showMenu ? 'flex' : 'none'}` }} onClick={() => setMenu(!showMenu)}>
                <div className={`${classes.mobileHeader_line} ${classes.mobileHeader_line_outline}`}>
                    <a href="https://karsavia.ru" target="_blank" >Войти</a>

                    <img src="close.png" alt="" onClick={() => setMenu(!showMenu)} />
                </div>

                {/* <div className={classes.mobileHeader_line}><a href="/price">Цены</a></div>
                <div className={classes.mobileHeader_line}><a href="/documentation">Документация</a></div>
                <div className={classes.mobileHeader_line}><a href="/support">Поддержка</a></div> */}

                <div className={classes.mobileHeader_line}><a href="/price">Цены</a></div>
                <div className={classes.mobileHeader_line}><a href="/">Документация</a></div>
                <div className={classes.mobileHeader_line}><a href="/">Поддержка</a></div>
                <div>
                    <ul className={classes.bottom}>
                        <li><a href="/#applications">Заявки<img src="link1.png" alt="" /></a></li>
                        <li><a href="/#dispatchers">Диспетчеры<img src="link2.png" alt="" /></a></li>
                        <li><a href="/#placements">Размещения<img src="link3.png" alt="" /></a></li>
                        <li><a href="/#airlines">Авиакомпании<img src="link4.png" alt="" /></a></li>
                        <li><a href="/#analytics">Аналитика<img src="link5.png" alt="" /></a></li>
                        <li><a href="/#transfer">Трансфер<img src="link8.png" alt="" /></a></li>
                        <li className={classes.fullWidth}><a href="/#contracts_and_reporting">Договоры и отчётность<img src="link6.png" alt="" /></a></li>
                        <li className={classes.fullWidth}><a href="/#users_and_security">Пользователи и безопасность<img src="link7.png" alt="" /></a></li>
                        <li className={classes.fullWidth}><a href="/#representative">Представительства<img src="link9.png" alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;