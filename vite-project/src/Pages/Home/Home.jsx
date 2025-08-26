
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./Home.css";
import RDHero from "../../components/RDHero/RDHero";
import LMServices from "../../components/LMServices/LMServices";
import MmFAQCards from "../../Components/MmFAQCards/MmFAQCards";
import SATrustedLogos from "../../Components/SATrustedLogos/SATrustedLogos";
import ThankyouSec from "../../components/ThankyouSec/ThankyouSec";
import MmHeadOfSection from "../../Components/MmHeadOfSection/MmHeadOfSection";
import HSH_SliderCards from "../../Components/HSH_SliderCards/HSH_SliderCards";
const STORAGE_KEY = "lm_cards";
const STORAGE_KEY_WC = "lm_why_choose";
const Home = () => {
  const [cards, setCards] = useState([]); // خدمات
  const [whyChooseCards, setWhyChooseCards] = useState([]); // ليش تختارنا

  const [faqData, setFaqData] = useState(() => {
    const storedFAQ = localStorage.getItem("faqData");
    return storedFAQ
      ? JSON.parse(storedFAQ)
      : [
        {
          question: "What services does SquareUp provide",
          answer:
            "SquareUp offers a range of services including design, engineering...",
        },
        {
          question: "How can SquareUp help my business?",
          answer: "Lorem ipsum dolor sit amet...",
        },
        {
          question: "What industries does SquareUp work with?",
          answer: "Lorem ipsum dolor sit amet...",
        },
        {
          question: "How long does it take to complete a project with SquareUp?",
          answer: "Lorem ipsum dolor sit amet...",
        },
        {
          question:
            "Do you offer ongoing support and maintenance after the project is completed?",
          answer: "Lorem ipsum dolor sit amet...",
        },
        {
          question: "Can you work with existing design or development frameworks?",
          answer: "Lorem ipsum dolor sit amet...",
        },
        {
          question: "How involved will I be in the project development process?",
          answer: "Lorem ipsum dolor sit amet...",
        },
        {
          question:
            "Can you help with website or app maintenance and updates?",
          answer: "Lorem ipsum dolor sit amet...",
        },
      ];
  });

  // حفظ FAQ في localStorage
  useEffect(() => {
    localStorage.setItem("faqData", JSON.stringify(faqData));
  }, [faqData]);

  // LM Services
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setCards(JSON.parse(raw));
      } catch {
        setCards([]);
      }
    } else {
      setCards([]);
    }
  }, []);

  // Why Choose
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY_WC);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        const withIds = parsed.map((item, i) => ({
          ...item,
          id: item.id || Date.now() + i,
        }));
        setWhyChooseCards(withIds);
        localStorage.setItem(STORAGE_KEY_WC, JSON.stringify(withIds));
      } catch {
        setWhyChooseCards([]);
      }
    } else {
      setWhyChooseCards([]);
    }
  }, []);

  return (
    <>

      <div className="lm_whitespacing_x">
        {/* Hero Section */}
        <RDHero
          title={"A Digital Product Studio that will Work"}
          description={
            <>
              For <span> Startups </span> , <span> Enterprise leaders </span> and{" "}
              <span> Social Good</span>
            </>
          }
          btn1={{ Link: "/Work", text: "Our Works" }}
          btn2={{ Link: "/ContactUs", text: "Contact Us" }}
        />

        <Outlet />
        {/* Trusted Logos + Thank You */}
        <SATrustedLogos
          subTitle="Trusted By 250+ Companies"
          icon1Trusted="/assets/images/company-1.svg"
          icon2Trusted="/assets/images/company-2.svg"
          icon3Trusted="/assets/images/company-3.svg"
          icon4Trusted="/assets/images/company-4.svg"
          icon5Trusted="/assets/images/company-5.svg"
          icon6Trusted="/assets/images/company-6.svg"
        />
        {/* Services Section */}
        <MmHeadOfSection
          title="Our Services"
          subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
          bgImage="/assets/images/head-bg-2.png"
        />
        <div className="lm-cards-container three-columns">
          {cards.map((card) => (
            <LMServices
              key={card.id}
              image={card.image}
              title={card.title}
              paragraph={card.paragraph}
              btn={card.btn}
              showButton={true}
              horizontal={false}
            />
          ))}
        </div>
        {/* Why Choose Section */}
        <MmHeadOfSection
          title="Why Choose SquareUp?"
          subtitle="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
          bgImage="/assets/images/head-bg-2.png"
        />
        <div className="lm-cards-container two-columns">
          {whyChooseCards.map((item) => (
            <LMServices
              key={item.id}
              image={item.image}
              title={item.title}
              paragraph={item.paragraph}
              showButton={false}
              horizontal={true}
            />
          ))}
        </div>
        <MmHeadOfSection
          title="What our Clients say About us"
          subtitle="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients.Here's what some of our satisfied clients have to say about thier experience working with us"
          bgImage="/assets/images/head-bg-2.png"
        />
        <HSH_SliderCards />
        <MmHeadOfSection
          title="Frequently Asked Questions"
          subtitle="Still you have any questions? Contact our Team via hello@squareup.com"
          bgImage="/assets/images/head-bg-4.png"
        />

        <MmFAQCards faqData={faqData} />
        <ThankyouSec
          bgImage="/assets/images/head-bg-3.png"
          image="/assets/images/Logo-colorfull.svg"
          title="Thank you for your Interest in SquareUp."
          subtitle="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
          buttonText="Start Project"
          linkTo="/contact"
        />
      </div>

    </>
  );
};

export default Home;