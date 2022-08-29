import styles from "./Hero.module.css";

function Hero() {
    return (
        <article className={`container ${styles.hero}`}>
            <div className={styles.hero__content}>
                <h1>Gerencie suas tarefas com um app simples e rápido.</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a className={styles.btn} href="/">Get Started</a>
            </div>
            <picture>
                <img src={require("../../../assets/img/time.jpg")} alt="" />
            </picture>
        </article>
    );
}

export default Hero;