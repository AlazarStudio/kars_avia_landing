import React from "react";
import classes from './Footer.module.css';

function Footer({ children, ...props }) {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerCenter}>
                <div className={classes.footerTop}>
                    <div className={`${classes.footerTop_column} ${classes.mobileFlex}`}>
                        <img src="logo_footer.png" alt="" />

                        <div className={`${classes.footerTop_column} ${classes.dn}`}>
                        <div className={classes.footerTop_columnBlock}>
                            <div className={classes.footerTop_columnBlock_title}>Телефон поддержки</div>
                            <a href="tel:+78805500488" className={classes.footerTop_columnBlock_boldNum}>8-800-550-04-88</a>
                        </div>
                    </div>
                    </div>
                    <div className={`${classes.footerTop_column} ${classes.dnm}`}>
                        <div className={classes.footerTop_columnBlock}>
                            <div className={classes.footerTop_columnBlock_title}>Телефон поддержки</div>
                            <a href="tel:+78805500488" className={classes.footerTop_columnBlock_boldNum}>8-800-550-04-88</a>
                        </div>
                    </div>
                    <div className={classes.footerTop_column}>
                        <div className={classes.footerTop_columnBlock}>
                            <div className={classes.footerTop_columnBlock_title}>Почта коммерческих отделов: </div>
                            <a href="mailto:commerce@kars-avia.ru" className={classes.footerTop_columnBlock_thinMail}>commerce@kars-avia.ru</a>
                            <a href="mailto:commerce@aniaero.ru" className={classes.footerTop_columnBlock_thinMail}>commerce@aniaero.ru</a>
                        </div>
                        <div className={classes.footerTop_columnBlock}>
                            <div className={classes.footerTop_columnBlock_title}>Региональный руководитель:</div>
                            <a href="" className={classes.footerTop_columnBlock_thinMail}>Dedkova@gk-kars.ru</a>
                        </div>
                    </div>
                    <div className={classes.footerTop_column}>
                        <div className={classes.footerTop_columnBlock}>
                            <div className={classes.footerTop_columnBlock_title}>Служба поддержки пассажиров: </div>
                            <a href="https://vk.com/karsavia"  target="_blank" className={classes.footerTop_columnBlock_social}>
                                <div className={classes.footerTop_columnBlock_social_img1}>
                                    <img src="vk.png" alt="" />
                                </div>
                                passengers@kars-avia.ru
                            </a>
                            <a href="https://wa.me/88005500488"  target="_blank" className={classes.footerTop_columnBlock_social}>
                                <div className={classes.footerTop_columnBlock_social_img2}>
                                    <img src="wa.png" alt="" />
                                </div>
                                8-800-550-04-88
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.footerBottom}>
                    <div className={classes.footerBottom_line}>
                        <a href="#" className={classes.footerBottom_column}>Политика конфиденциальности</a>
                        <a href="#" className={classes.footerBottom_column}>Пользовательское соглашение</a>
                    </div>
                    <a href="https://alazarstudio.ru" target="_blank" ><img src="alazar_light.png" alt="" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;