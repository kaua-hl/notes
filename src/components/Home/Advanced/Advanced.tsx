import styles from "./Advanced.module.css";

export const Advanced = () => {
    return (
        <article className={styles.advanced}>
            <img src={require("../../../assets/img/started.png")} alt="" />
            <div className={styles.advanced__content}>
                <h2>Lorem Ipsum is simply dummy text of the printing.</h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <a className={styles.btn} href="/">Get Started</a>
            </div>
        </article>
    );
};