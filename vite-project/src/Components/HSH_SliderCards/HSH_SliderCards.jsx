// src/Components/HSH_SliderCards/HSH_SliderCards.jsx
import { useState, useEffect } from "react";
import "./HSH_SliderCards.css";

const HSH_SliderCards = () => {
    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(2);

    // load cards from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("sliderCards");
        if (stored) {
            setCards(JSON.parse(stored));
        }
    }, []);

    // update on resize
    useEffect(() => {
        const updateItems = () => {
            setItemsPerSlide(window.innerWidth <= 992 ? 1 : 2);
        };
        updateItems();
        window.addEventListener("resize", updateItems);
        return () => window.removeEventListener("resize", updateItems);
    }, []);

    const totalSlides = Math.ceil(cards.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const startIndex = currentIndex * itemsPerSlide;
    let slideItems = cards.slice(startIndex, startIndex + itemsPerSlide);

    if (slideItems.length < itemsPerSlide) {
        slideItems = [
            ...slideItems,
            ...cards.slice(0, itemsPerSlide - slideItems.length),
        ];
    }

    return (
        <section className="HSH_CardsContainer">
            <div className="HSH_Slider">
                <button className="HSH_NavButton left" onClick={prevSlide}>
                    &#10094;
                </button>
                <div className={`HSH_Slide items-${itemsPerSlide}`}>
                    {slideItems.map((card) => (
                        <div key={card.id} className="HSH_Card">
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                            <div className="HSH_CardContent">
                                <img
                                    src={card.image}
                                    alt={card.name}
                                    className="HSH_ClientImg"
                                />
                                <div className="HSH_Info">
                                    <h3>{card.name}</h3>
                                    <p>{card.job}</p>
                                </div>
                                {card.url && (
                                    <a
                                        href={card.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="HSH_Button"
                                    >
                                        View website
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <button className="HSH_NavButton right" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>

            <div className="HSH_Dots">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <span
                        key={index}
                        className={`HSH_Dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default HSH_SliderCards;