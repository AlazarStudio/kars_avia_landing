import React from "react";
import classes from './Footer.module.css';

function Footer({ children, ...props }) {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerCenter}>
                <div className={classes.footerTop}>
                    <div className={classes.footerTop_column}>
                        <img src="logo_footer.png" alt="" />
                    </div>
                    <div className={classes.footerTop_column}>
                        <div className={classes.footerTop_columnBlock}>
                            <div className={classes.footerTop_columnBlock_title}>Телефон поддержки</div>
                            <a href="tel:+78805500488" className={classes.footerTop_columnBlock_boldNum}>8-800-550-04-88</a>
                        </div>
                    </div>
                    <div className={classes.footerTop_column}>
                        <div className={classes.footerTop_columnBlock}>
                            <div className={classes.footerTop_columnBlock_title}>Почта коммерческих отделов: </div>
                            <a href="" className={classes.footerTop_columnBlock_thinMail}>commerce@kars-avia.ru</a>
                            <a href="" className={classes.footerTop_columnBlock_thinMail}>commerce@aniaero.ru</a>
                        </div>
                        <div className={classes.footerTop_columnBlock}>
                            <div className={classes.footerTop_columnBlock_title}>Региональный руководитель:</div>
                            <a href="" className={classes.footerTop_columnBlock_thinMail}>Dedkova@gk-kars.ru</a>
                        </div>
                    </div>
                    <div className={classes.footerTop_column}>
                        <div className={classes.footerTop_columnBlock}>
                            <div className={classes.footerTop_columnBlock_title}>Служба поддержки пассажиров: </div>
                            <a href="" className={classes.footerTop_columnBlock_social}>
                                <div className={classes.footerTop_columnBlock_social_img1}>
                                    <img src="vk.png" alt="" />
                                </div>
                                passengers@kars-avia.ru
                            </a>
                            <a href="" className={classes.footerTop_columnBlock_social}>
                                <div className={classes.footerTop_columnBlock_social_img2}>
                                    <img src="wa.png" alt="" />
                                </div>
                                8-800-550-04-88
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.footerBottom}>
                    <a href="#" className={classes.footerBottom_column}>Политика конфиденциальности</a>
                    <a href="#" className={classes.footerBottom_column}>Пользовательское соглашение</a>
                    <a href="https://alazarstudio.ru" target="_blank" className={classes.footerBottom_column}><img src="alazar_light.png" alt="" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;