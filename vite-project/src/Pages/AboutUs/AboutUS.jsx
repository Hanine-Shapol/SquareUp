import "./AboutUS.css"
import { Outlet } from "react-router-dom";
import RDContainer from "../../components/RDContainer/RDContainer"
import { useEffect, useState } from "react"
import MmHeadOfSection from "../../Components/MmHeadOfSection/MmHeadOfSection";

const AboutUS = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const storedCards = JSON.parse(localStorage.getItem("cardsAbout")) || [];
        setCards(storedCards);
    }, []);

    return (
        <div className="lm_whitespacing_x">
            <MmHeadOfSection
                    title="About Us"
                    subtitle="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
                    bgImage="/assets/images/head-bg-5.png"
                />
            <h1>Our Story</h1>
            <RDContainer Cards={cards} titleColor="var(--CardTitleGreenColor)" />
            <Outlet />
        </div>
    )
}

export default AboutUS

