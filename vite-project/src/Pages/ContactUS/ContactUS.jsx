import { useEffect, useState } from "react";

import MmContactUsForm from "../../Components/MmContactUsForm/MmContactUsForm";
import MmFAQCards from "../../Components/MmFAQCards/MmFAQCards";
import MmHeadOfSection from "../../Components/MmHeadOfSection/MmHeadOfSection";
import SaTodaySquareUp from "../../components/SaTodaySquareUp/SaTodaySquareUp";

const ContactUS = () => {
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

  return (
    <>
      <div className="lm_whitespacing_x">
        <MmHeadOfSection
          title="Contact Us"
          subtitle="Get in touch with us today and let us help you with any questions or inquiries you may have."
          bgImage="/assets/images/head-bg-4.png"
        />
      </div>

      <MmContactUsForm />

      <div className="lm_whitespacing_x">
        <MmHeadOfSection
          title="Frequently Asked Questions"
          subtitle="Still you have any questions? Contact our Team via hello@squareup.com"
          bgImage="/assets/images/head-bg-4.png"
        />
        <MmFAQCards faqData={faqData} />
        <MmHeadOfSection
          title="Contact Us"
          subtitle="Get in touch with us today and let us help you with any questions or inquiries you may have."
          bgImage="/assets/images/head-bg-4.png"
        />
      </div>

      <div>
        <MmContactUsForm />
      </div>

      <div className="lm_whitespacing_x">
        <SaTodaySquareUp
          icon="/assets/images/Logo.svg"
          title="Today, SquareUp Continues to Thrive as a Leading Digital Product Agency....."
          subtitle="Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life."
          subtitleCta="Welcome to SquareUp"
          highlightCta="Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation."
          linkTo="/contact"
          buttonText="Start Project"
        />
      </div>
    </>
  );
};

export default ContactUS;