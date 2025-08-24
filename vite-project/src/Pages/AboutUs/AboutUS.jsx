import "./AboutUS.css"
import { Outlet } from "react-router-dom";
import RDContainer from "../../components/RDContainer/RDContainer"
import { useEffect, useState } from "react"

const AboutUS = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const storedCards = JSON.parse(localStorage.getItem("cardsAbout")) || [];
        setCards(storedCards);
    }, []);

    return (
        <div>
            <h1 className="lm_whitespacing_x">Our Story</h1>
            <RDContainer Cards={cards} titleColor="var(--CardTitleGreenColor)" />
            <Outlet />
        </div>
    )
}

export default AboutUS

