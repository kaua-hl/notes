import styles from "./Features.module.css";
import { ReactComponent as Cube } from "../../../assets/icons/bx-cube-alt.svg";
import { ReactComponent as Time } from "../../../assets/icons/bx-time-five.svg";
import { ReactComponent as Rocket } from "../../../assets/icons/bx-rocket.svg";

export const Features = () => {
    return (
        <section className={`container ${styles.features}`}>
            <div>
                <Time />
                <h3>Lorem ipsum dolor sit</h3>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing.</p>
            </div>
            <div>
                <Cube />
                <h3>Contrary to popular belief</h3>
                <p>Latin professor at Hampden-Sydney College in Virginia. Letraset sheets containing .</p>
            </div>
            <div>
                <Rocket />
                <h3>There are many variations</h3>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure, 1960s.</p>
            </div>
        </section>
    );
};