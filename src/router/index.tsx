import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { SignIn } from "../pages/Authenticate/SignIn/SignIn";
import { SignUp } from "../pages/Authenticate/SignUp/SignUp";
import { Home } from "../pages/Home/Home";
import { Plans } from "../pages/Plans/Plans";
import { Feed } from "../pages/User/Feed";

export const index = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/plans" element={<Plans />}/>
                <Route path="/signin" element={<SignIn />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/feed" element={<Feed />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};