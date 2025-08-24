import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import RDHero from "../../components/RDHero/RDHero";
import LMServices from "../../Components/LMServices/LMServices";
import MmFAQCards from "../../Components/MmFAQCards/MmFAQCards";
import HSH_SliderCards from "../../components/HSH_SliderCards/HSH_SliderCards";
import "./Home.css";

const STORAGE_KEY = "lm_cards";
const STORAGE_KEY_WC = "lm_why_choose";

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
    title:
      "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
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
  const [cards, setCards] = useState([]);
  const [whyChooseCards, setWhyChooseCards] = useState([]);

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

  const [testimonialCards, setTestimonialCards] = useState(() => {
    const storedCards = localStorage.getItem("cards");
    return storedCards ? JSON.parse(storedCards) : defaultCards;
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(testimonialCards));
  }, [testimonialCards]);

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
        <HSH_SliderCards cards={testimonialCards} />
        <MmFAQCards cards={testimonialCards} />
      </div>
    </div>
  );
};

export default Home;