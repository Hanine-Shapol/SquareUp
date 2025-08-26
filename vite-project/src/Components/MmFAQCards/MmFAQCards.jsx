import { useState } from "react";
import "./MmFAQCards.css";

const MmFAQCards = ({ faqData }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // نقسم الأسئلة على عمودين
    const leftColumn = faqData.filter((_, i) => i % 2 === 0);
    const rightColumn = faqData.filter((_, i) => i % 2 !== 0);

    const renderColumn = (items, colOffset = 0) =>
        items.map((item, index) => {
            const realIndex = index * 2 + colOffset;
            return (
                <div className="card" key={realIndex}>
                    <div
                        className="question-container"
                        onClick={() => toggleAnswer(realIndex)}
                    >
                        <div className="question">
                            <span>{String(realIndex + 1).padStart(2, "0")}</span>
                            <h4>{item.question}</h4>
                        </div>
                        <img
                            src={
                                activeIndex === realIndex
                                    ? "/assets/images/asterisk.svg"
                                    : "/assets/images/plus.svg"
                            }
                            alt="toggle"
                        />
                    </div>
                    <p className={activeIndex === realIndex ? "answer open" : "answer"}>
                        {item.answer}
                    </p>
                </div>
            );
        });

    return (
        <div className="questions">
            <div className="column">{renderColumn(leftColumn, 0)}</div>
            <div className="column">{renderColumn(rightColumn, 1)}</div>
        </div>
    );
};

export default MmFAQCards;