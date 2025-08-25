
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import RDHero from "../../components/RDHero/RDHero";
import LMServices from "../../Components/LMServices/LMServices";
import MmFAQCards from "../../Components/MmFAQCards/MmFAQCards";
import HSH_SliderCards from "../../Components/HSH_SliderCards/HSH_SliderCards";
import "./Home.css";
import MmHeadOfSection from "../../Components/MmHeadOfSection/MmHeadOfSection";

// مفاتيح التخزين
const STORAGE_KEY = "lm_cards";
const STORAGE_KEY_WC = "lm_why_choose";

// بيانات افتراضية
const DEFAULT_CARDS = [
  {
    image: "/assets/images/draw.svg",
    title: "Design",
    paragraph:
      "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    btn: "learn more",
  },
  {
    image: "/assets/images/buzzel.svg",
    title: "Engineering",
    paragraph:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    btn: "learn more",
  },
  {
    image: "/assets/images/battery.svg",
    title: "Project Management",
    paragraph:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    btn: "learn more",
  },
];

const defaultWhyChoose = [
  {
    image: "/assets/images/distinction.svg",
    title: "Expertise",
    paragraph:
      "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
  },
  {
    image: "/assets/images/call.svg",
    title: "Client-Centric Approach",
    paragraph:
      "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
  },
  {
    image: "/assets/images/protected-power.svg",
    title: "Results-Driven Solutions",
    paragraph:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
  },
  {
    image: "/assets/images/collaborative.svg",
    title: "Collaborative Partnership",
    paragraph:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
  },
];

const Home = () => {
  const [cards, setCards] = useState([]); // خدمات
  const [whyChooseCards, setWhyChooseCards] = useState([]); // ليش تختارنا
  const [faqData, setFaqData] = useState(() => {
    const storedFAQ = localStorage.getItem("faqData");
    return storedFAQ
      ? JSON.parse(storedFAQ)
      : [
          { question: "What services does SquareUp provide", answer: "SquareUp offers a range of services including design, engineering..." },
          { question: "How can SquareUp help my business?", answer: "Lorem ipsum dolor sit amet..." },
          { question: "What industries does SquareUp work with?", answer: "Lorem ipsum dolor sit amet..." },
          { question: "How long does it take to complete a project with SquareUp?", answer: "Lorem ipsum dolor sit amet..." },
          { question: "Do you offer ongoing support and maintenance after the project is completed?", answer: "Lorem ipsum dolor sit amet..." },
          { question: "Can you work with existing design or development frameworks?", answer: "Lorem ipsum dolor sit amet..." },
          { question: "How involved will I be in the project development process?", answer: "Lorem ipsum dolor sit amet..." },
          { question: "Can you help with website or app maintenance and updates?", answer: "Lorem ipsum dolor sit amet..." }
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
      const seeded = DEFAULT_CARDS.map((c, i) => ({
        ...c,
        id: Date.now() + i,
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
      setCards(seeded);
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
      const seeded = defaultWhyChoose.map((c, i) => ({
        ...c,
        id: Date.now() + i,
      }));
      localStorage.setItem(STORAGE_KEY_WC, JSON.stringify(seeded));
      setWhyChooseCards(seeded);
    }
  }, []);

  return (
    <div className="home-container">
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

      {/* Services Section */}
      <div className="lm_whitespacing_x">
        <MmHeadOfSection
          title="Our Services"
          subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
          bgImage="/assets/images/head-bg-2.png"
        />
      </div>
      <div className="lm_whitespacing_x lm-cards-container three-columns">
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
      <div className="lm_whitespacing_x">
        <MmHeadOfSection
          title="Why Choose SquareUp?"
          subtitle="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
          bgImage="/assets/images/head-bg-2.png"
          className="lm_whitespacing_x"
        />
      </div>
      <div className="lm_whitespacing_x lm-cards-container two-columns">
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

      {/* Testimonials Section */}
      <div className="lm_whitespacing_x">
        <MmHeadOfSection
title="What our Clients say About us"
          subtitle="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
          bgImage="/assets/images/head-bg-3.png"
        />
              <HSH_SliderCards />
      </div>

      {/* FAQ Section */}
      <div className="lm_whitespacing_x">
        <MmHeadOfSection
          title="Frequently Asked Questions"
          subtitle="Still you have any questions? Contact our Team via hello@squareup.com"
          bgImage="/assets/images/head-bg-4.png"
        />
        <MmFAQCards faqData={faqData} />
      </div>
    </div>
  );
};

export default Home;