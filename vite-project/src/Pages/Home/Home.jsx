import { Link, Outlet } from "react-router-dom"
import RDHero from "../../components/RDHero/RDHero"

import React, { useState, useEffect } from "react";
import MmFAQCards from "../../Components/MmFAQCards/MmFAQCards";
import HSH_SliderCards from "../../components/HSH_SliderCards/HSH_SliderCards";
import "./Home.css";

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

const Home = () => {
<<<<<<< HEAD
    
    return (
        <>
            <RDHero
            title ={"A Digital Product Studio that will Work"}
            description ={<>For <span> Startups </span> , <span> Enterprise leaders </span> , <span> Enterprise leaders </span> and <span> Social Good</span></>}
            btn1 ={{Link : "/Work", text : "Our Works"}}
            btn2 ={{Link : "/ContactUs", text : "Contact Us"}}
            />

            <Outlet/>
        </>
    )
}
=======
>>>>>>> 6318f6ac15b6bcc62d9f8f9df2a3b93057e04c37

  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem("cards");
    return storedCards ? JSON.parse(storedCards) : defaultCards;
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <div className="home-container lm_whitespacing_x">
      <HSH_SliderCards cards={cards} />
      <MmFAQCards cards={cards} />
    </div>
  );
};

export default Home;