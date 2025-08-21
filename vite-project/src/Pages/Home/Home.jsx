import { useEffect, useState } from "react";
import LMServices from "../../Components/LMServices/LMServices";
import './Home.css'

const STORAGE_KEY = "lm_cards";
const STORAGE_KEY_WC = "lm_why_choose";

// القيم الافتراضية الخاصة بخدمات Services
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

// القيم الافتراضية الخاصة بـ Why Choose Section
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
  const [cards, setCards] = useState([]);
  const [whyChooseCards, setWhyChooseCards] = useState([]);

  // Services
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
    <div>
      {/* القسم الأول: Services */}
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

      {/* القسم الثاني: Why Choose */}
      <div className="lm_whitespacing_x lm-cards-container two-columns">
        {whyChooseCards.map((item) => (
          <LMServices
            key={item.id}
            image={item.image}
            title={item.title}
            paragraph={item.paragraph}
            showButton={false}
            horizontal={true} // فرق الترتيب: أيقونة + عنوان جنب بعض
          />
        ))}
      </div>
    </div>
  )
}

export default Home
