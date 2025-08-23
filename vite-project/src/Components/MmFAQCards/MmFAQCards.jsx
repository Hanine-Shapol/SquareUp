import { useState, useEffect } from "react";
import "./MmFAQCards.css";

const MmFAQCards = () => {
    const storedFAQ = JSON.parse(localStorage.getItem("faqData")) || [];
    const defaultFAQ = [
        {
            question: "What services does SquareUp provide?",
            answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
        },
        {
            question: "How can SquareUp help my business?",
            answer: "SquareUp helps your business grow by creating tailored digital solutions, improving your online presence, and streamlining workflows through modern technology.",
        },
    ];

    const [faqData, setFaqData] = useState(storedFAQ.length > 0 ? storedFAQ : defaultFAQ);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const handleStorageChange = () => {
            const updatedData = JSON.parse(localStorage.getItem("faqData")) || defaultFAQ;
            setFaqData(updatedData);
        };
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="questions">
            {faqData.map((item, index) => (
                <div className="card" key={index}>
                    <div className="question-container" onClick={() => toggleAnswer(index)}>
                        <div className="question">
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <h4>{item.question}</h4>
                        </div>
                        <img
                            src={activeIndex === index ? "/assets/images/asterisk.svg" : "/assets/images/plus.svg"}
                            alt="toggle"
                        />
                    </div>
                    <p className={activeIndex === index ? "answer open" : "answer"}>
                        {item.answer}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default MmFAQCards;