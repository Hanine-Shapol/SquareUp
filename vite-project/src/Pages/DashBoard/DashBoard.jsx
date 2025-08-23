import './DashBoard.css'
import RDProcessPageCrud from '../../components/RDProcessPageCrud/RDProcessPageCrud'
import RDAboutPageCrud from '../../components/RDAboutPageCrud/RDAboutPageCrud'
import MmContactUsDashboard from "../../Components/MmContactUsDashbord/MmContactUsDashboard"
import MmWorkDashboard from "../../Components/MmWorkDashboard/MmWorkDashboard"


import React, { useState, useEffect } from "react";
import HSH_FAQCRUD from "../../Components/HSH_FAQCRUD/HSH_FAQCRUD";
import HSH_CardCRUD from "../../Components/HSH_CardCRUD/HSH_CardCRUD";
import "./Dashboard.css";

const defaultFAQ = [
    {
        question: "What services does SquareUp provide",
        answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
        question: "How can SquareUp help my business?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "What industries does SquareUp work with?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "How long does it take to complete a project with SquareUp?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "Do you offer ongoing support and maintenance after the project is completed?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "Can you work with existing design or development frameworks?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "How involved will I be in the project development process?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "Can you help with website or app maintenance and updates?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    }
];
const defaultCards = [
    {
        id: 1,
        title: "SquareUp has been Instrumental in Transforming our Online Presence.",
        description:
            "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
        image: "/images/John.jpg",
        name: "John Smith",
        job: "CEO of Chic Boutique",
        url: "https://focal-x.com/",
    },
    {
        id: 2,
        title: "Working with SquareUp was a breeze.",
        description:
            "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
        image: "/images/Sarah.png",
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
        image: "/images/Mark.png",
        name: "Mark Thompson",
        job: "CEO of EventMasters",
        url: "https://focal-x.com/",
    },
    {
        id: 4,
        title: "ProTech Solutions turned to SquareUp to automate our workflow",
        description:
            "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
        image: "/images/Laura.png",
        name: "Laura Adams",
        job: "COO of ProTech Solutions.",
        url: "https://focal-x.com/",
    },
    {
        id: 5,
        title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
        description:
            "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
        image: "/images/Michael.png",
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
        image: "/images/Emily.png",
        name: "Emily Turner",
        job: "CEO of FitLife Tracker",
        url: "https://focal-x.com/",
    },
];

const Dashboard = () => {
  const [faqData, setFaqData] = useState(() => {
    const storedFAQ = localStorage.getItem("faqData");
    return storedFAQ ? JSON.parse(storedFAQ) : defaultFAQ;
  });

  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem("cardsData");
    return storedCards ? JSON.parse(storedCards) : defaultCards;
  });

  useEffect(() => {
    localStorage.setItem("faqData", JSON.stringify(faqData));
  }, [faqData]);

  useEffect(() => {
    localStorage.setItem("cardsData", JSON.stringify(cards));
  }, [cards]);

  return (
    <div className='lm_whitespacing_x'>
        <h2>At SquareUp Crud</h2>
        <RDProcessPageCrud />
        <h2>Our Story Crud</h2>
        <RDAboutPageCrud/>
        <h1>DashBoard</h1>
        <MmWorkDashboard />
        <MmContactUsDashboard />
    <HSH_CardCRUD  cards={cards} setCards={setCards} />
      <HSH_FAQCRUD  faqData={faqData} setFaqData={setFaqData} />
    </div>
)
export default DashBoard;


