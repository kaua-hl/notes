import "../FormStyles.css";
import styles from "./SignIn.module.css";
import { ReactComponent as IconGoogle } from "../../../assets/icons/bxl-google.svg";

export const SignIn = () => {
    return (
        <div className={styles.signin}>
            <img src={require("../../../assets/img/signin.png")} alt="" />
            <div className={styles.signin__content}>
                <h2>Sign In</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                <form className="form">
                    <div>
                        <label>E-mail</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu E-email" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" id="password" name="password" placeholder="Digite seu senha" />
                    </div>
                    <div className="confirmation">
                        <div className="checkbox">
                            <input type="checkbox" name="robot" id="robot"/>
                            <label htmlFor="robot">I`am not robot</label>
                        </div>
                        <p className={styles.forgot}>Forgot Password</p>
                    </div>
                    <button>Sign In</button>
                    <button><IconGoogle />Google</button>
                </form>
                <p className="createAccount">Dont have account? <a href="/">Sign Up</a></p>
            </div>
        </div>
    );
};