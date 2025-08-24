import { Outlet } from "react-router-dom";
import RDContainer from "../../components/RDContainer/RDContainer";
import RDShowBtn from "../../components/RDShowBtn/RDShowBtn";
import { useEffect, useState } from "react";


const Process = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const storedCards = JSON.parse(localStorage.getItem("cards")) || [];
        setCards(storedCards);
    }, []);

    return (
        <div>
            
            <RDShowBtn initialCount={4}  Cards={cards}/>
            <Outlet />
        </div>
    );
};

export default Process;


