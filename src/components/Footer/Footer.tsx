import styles from "./Footer.module.css";
import {ReactComponent as Logo} from "../../assets/icons/logo-white.svg";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container`}>
                <div className={styles.footer__content}>
                    <Logo />
                    <div className={styles.footer__description}>
                        <h3>Products</h3>
                        <ul>
                            <li><a href="/">Overview</a></li>
                            <li><a href="/">Pricing</a></li>
                            <li><a href="/">Apps</a></li>
                            <li><a href="/">Security</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer__description}>
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Guides & Tutorials</a></li>
                            <li><a href="/">Help Center</a></li>
                            <li><a href="/">What`s new</a></li>
                            <li><a href="/">Api Docs</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer__description}>
                        <h3>Company </h3>
                        <ul>
                            <li><a href="/">About us</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Media</a></li>
                            <li><a href="/">Contact Sales</a></li>
                            <li><a href="/">Contact support</a></li>
                        </ul>
                    </div>
                </div>
                <small className={styles.copy}>&copy; Copyright 2022, Notes</small>
            </div>
        </footer>
    );
};