import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const Main = (content: HTMLElement) => {
    return (
        <>
            <Header />
                {content}
            <Footer />
        </>
    );
};