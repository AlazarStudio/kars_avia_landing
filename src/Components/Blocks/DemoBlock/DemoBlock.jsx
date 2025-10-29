import React from "react";
import classes from './DemoBlock.module.css';

function DemoBlock({ children, ...props }) {
    return (
        <div className={classes.demoBlock}>
            <div className={classes.demoBlockInfo}>
                <div className={classes.demoBlockInfo_title}>
                    KarsAvia — единая система управления размещением экипажей и пассажиров авиакомпаний
                </div>
                <div className={classes.demoBlockInfo_desc}>
                    Больше никаких звонков и бесконечных писем.
                    KarsAvia объединяет авиакомпании, гостиницы
                    и диспетчеров в одну цифровую платформу,
                    где каждая заявка обрабатывается автоматически
                    — от бронирования до отчётности.
                </div>
                <a href="https://demo.karsavia.ru" target="_blank" className={`${classes.demoBlockInfo_btn} ${classes.fill}`}>
                    Получить демо-версию
                </a>
            </div>
            <img src="demoBlockBack.png" alt="" className={classes.demoBlockBack} />
            <img src="demoBlockMobile.png" alt="" className={classes.demoBlockBackMobile} />
        </div>
    );
}

export default DemoBlock;