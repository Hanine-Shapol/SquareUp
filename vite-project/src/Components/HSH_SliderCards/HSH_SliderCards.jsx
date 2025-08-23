
import React, { useState, useEffect } from "react";
import "./HSH_SliderCards.css";

const defaultCards = [
    {
        id: 1,
        title: "SquareUp has been Instrumental in Transforming our Online Presence.",
        description:
            "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
        image: "/assets/images/John.jpg",
        name: "John Smith",
        job: "CEO of Chic Boutique",
        url: "https://focal-x.com/",
    },
    {
        id: 2,
        title: "Working with SquareUp was a breeze.",
        description:
            "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
        image: "/assets/images/Sarah.png",
        name: "Sarah Johnson",
        job: "Founder of HungryBites.",
        url: "https://focal-x.com/",
    },
    {
        id: 3,
        title:
            "SquareUp developed a comprehensive booking and reservation system for our event management company",
        description:
            "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
        image: "/assets/images/Mark.png",
        name: "Mark Thompson",
        job: "CEO of EventMasters",
        url: "https://focal-x.com/",
    },
    {
        id: 4,
        title: "ProTech Solutions turned to SquareUp to automate our workflow",
        description:
            "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
        image: "/assets/images/Laura.png",
        name: "Laura Adams",
        job: "COO of ProTech Solutions.",
        url: "https://focal-x.com/",
    },
    {
        id: 5,
        title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
        description:
            "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
        image: "/assets/images/Michael.png",
        name: "Michael Anderson",
        job: "Founder of Dream Homes Realty.",
        url: "https://focal-x.com/",
    },
    {
        id: 6,
        title:
            "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
        description:
            "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
        image: "/assets/images/Emily.png",
        name: "Emily Turner",
        job: "CEO of FitLife Tracker",
        url: "https://focal-x.com/",
    },
];

const HSH_SliderCards = () => {
    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(2);

    useEffect(() => {
        const storedCards = localStorage.getItem("sliderCards");
        if (storedCards) {
            setCards(JSON.parse(storedCards));
        } else {
            localStorage.setItem("sliderCards", JSON.stringify(defaultCards));
            setCards(defaultCards);
        }
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            const updatedCards = localStorage.getItem("sliderCards");
            if (updatedCards) setCards(JSON.parse(updatedCards));
        };
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);


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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const startIndex = currentIndex * itemsPerSlide;
    let slideItems = cards.slice(startIndex, startIndex + itemsPerSlide);
    if (slideItems.length < itemsPerSlide) {
        slideItems = [...slideItems, ...cards.slice(0, itemsPerSlide - slideItems.length)];
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
                                <img src={card.image} alt={card.name} className="HSH_ClientImg" />
                                <div className="HSH_Info">
                                    <h3>{card.name}</h3>
                                    <p>{card.job}</p>
                                </div>
                                {card.url && (
                                    <a href={card.url} target="_blank" rel="noopener noreferrer" className="HSH_Button">
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