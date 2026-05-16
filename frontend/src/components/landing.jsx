import { toast, ToastContainer } from "react-toastify";
import Navbar from "./navbar";
import Home from "./homepage";
import About from "./about";
import Features from "./features";
import FAQ from "./faq";

export default function Landing() {

    return (
        <>
            <Navbar />
            <section id="home">
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="features">
                <Features />
            </section>
            <section id="faq">
                <FAQ />
            </section>
            <ToastContainer position="bottom-right" />
        </>
    )
}