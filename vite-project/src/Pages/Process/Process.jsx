import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import ThankyouSec from "../../components/ThankyouSec/ThankyouSec";
import SaWorkone from "../../components/SaWorkone/SaWorkone"; 
import SASquerup from "../../components/SASquerup/SASquerup";
import RDContainer from "../../components/RDContainer/RDContainer";
import RDShowBtn from "../../components/RDShowBtn/RDShowBtn";

const Process = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const storedCards = JSON.parse(localStorage.getItem("cards")) || [];
        setCards(storedCards);
    }, []);

    return (
        <>
            <SaWorkone
                bgImage="/assets/images/head-bg-4.png"
                title="Process of Starting the Project"
                subtitle="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
            />
            <SASquerup
                title="At SquareUp"
                subtitle="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
                subtitleContainer="Here's an overview of our typical process:"
            />
            <RDShowBtn initialCount={4} Cards={cards} />
            <ThankyouSec
                bgImage="/assets/images/head-bg-3.png"
                image="/assets/images/Logo-colorfull.svg"
                title="Thank you for your Interest in SquareUp."
                subtitle="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
                buttonText="Start Project"
                linkTo="/contact"
            />
            <Outlet />
        </>
    );
};

export default Process;