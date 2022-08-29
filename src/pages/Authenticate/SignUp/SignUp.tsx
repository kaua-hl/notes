import "../FormStyles.css";
import styles from "./SignUp.module.css";
import { ReactComponent as IconGoogle } from "../../../assets/icons/bxl-google.svg";

export const SignUp = () => {
    return (
        <div className={styles.signup}>
            <img src={require("../../../assets/img/signup.png")} alt="" />
            <div className={styles.signup__content}>
                <h2>Sign Up</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                <form className="form">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Digite seu Nome" />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu E-email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirme sua senha" />
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" name="robot" id="robot"/>
                        <label htmlFor="robot">I`am not robot</label>
                    </div>
                    <button>Sign Up</button>
                    <button><IconGoogle />Google</button>
                </form>
                <p className="createAccount">Dont have account? <a href="/">Sign Up</a></p>
            </div>
        </div>
    );
};