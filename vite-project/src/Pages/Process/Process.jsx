import { Outlet } from "react-router-dom";
import RDContainer from "../../components/RDContainer/RDContainer";
import RDShowBtn from "../../components/RDShowBtn/RDShowBtn";
import { useEffect, useState } from "react";
import MmHeadOfSection from "../../Components/MmHeadOfSection/MmHeadOfSection";


const Process = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const storedCards = JSON.parse(localStorage.getItem("cards")) || [];
        setCards(storedCards);
    }, []);

    return (
            <div className="lm_whitespacing_x">
                <MmHeadOfSection
                    title="Process of Starting the Project"
                    subtitle="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
                    bgImage="/assets/images/head-bg-6.png"
                />
                <RDShowBtn initialCount={4} Cards={cards} />
            <Outlet />
            </div>
            
    );
};

export default Process;


