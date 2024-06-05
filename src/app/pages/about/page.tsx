import Navbar from "../../Home/Navbar";
import Hero from "../../components/Hero";
import Descr from "../../components/Descr";
import Factors from "./Factors";
import Team from "./Team";
import Landon from "../../Home/Landon";
import Userfooter from "../footer";

export default function AboutUs() {
    return (
        <main style={{ fontFamily: "sans-serif" }}>
            <Navbar />
            <Hero />
            <Descr />
            <Factors />
            <Team />
            <Userfooter />
        </main>
    )
}
