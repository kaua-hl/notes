import styles from "./Plans.module.css";

export const Plans = () => {
    return (
        <div className={styles.plans}>
            <div className="container">
                <div className={styles.plans__intro}>
                    <h1>Pronto para iniciar com o pé direito?</h1>
                    <p>Escolha seu plano e obtenha todos os benefícios.</p>
                </div>
                <div className={styles.cards}>
                    <div>
                        <h3>Lite</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                    <div>
                        <h3>Pro</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                    <div>
                        <h3>Ultimate</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};