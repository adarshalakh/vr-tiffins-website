import { useState } from "react";
import "./FAQ.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How does the subscription work?",
    answer:
      "Choose a weekly or monthly plan, and fresh meals will be delivered daily to your selected address.",
  },
  {
    question: "Can I pause my meal deliveries?",
    answer:
      "Yes. You can pause your upcoming meals anytime through the app and use your meal credits later.",
  },
  {
    question: "Do you offer one-time meal orders?",
    answer:
      "Yes. You can order individual meals and add-ons without purchasing a subscription.",
  },
  {
    question: "How are meals prepared?",
    answer:
      "Our meals are freshly prepared every day using quality ingredients while maintaining strict hygiene standards.",
  },
  {
    question: "Which payment methods are supported?",
    answer:
      "We support UPI, debit cards, credit cards, net banking, and other popular online payment methods.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2>Frequently Asked Questions</h2>

      <p className="faq-subtitle">
        Everything you need to know about VR Tiffins.
      </p>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{item.question}</h3>

              {activeIndex === index ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;