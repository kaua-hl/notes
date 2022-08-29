import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={`container ${styles.header}`}>
            <Link to="/"><Logo /></Link>
            <nav>
                <ul className={styles.header__list}>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/plans">Plans</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/signin">Login</Link></li>
                    <li><Link className={styles.btn} to="/signup">Register</Link></li>
                </ul>
            </nav>
        </header>
    );
};