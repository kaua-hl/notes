import Hero from "../../components/Home/Hero/Hero";
import { Features } from "../../components/Home/Features/Features";
import { Advanced } from "../../components/Home/Advanced/Advanced";

export const Home = () => {
    return (
        <main>
            <Hero />
            <Features />
            <Advanced />
        </main>
    );
};