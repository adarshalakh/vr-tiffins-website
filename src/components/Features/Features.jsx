import "./Features.css";
import {
  FaUtensils,
  FaCalendarAlt,
  FaPauseCircle,
  FaRedoAlt,
  FaMotorcycle,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUtensils />,
    title: "Healthy Meals",
    description: "Fresh home-cooked meals prepared with quality ingredients.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Flexible Plans",
    description: "Choose weekly or monthly meal subscriptions.",
  },
  {
    icon: <FaPauseCircle />,
    title: "Pause Anytime",
    description: "Going out? Pause your meals whenever you need.",
  },
  {
    icon: <FaRedoAlt />,
    title: "Easy Reorder",
    description: "Reorder your favorite meals with one tap.",
  },
  {
    icon: <FaMotorcycle />,
    title: "Fast Delivery",
    description: "Timely lunch and dinner delivery at your doorstep.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Hygienic",
    description: "Prepared with hygiene and delivered safely every day.",
  },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Why Choose VR Tiffins?</h2>
      <p className="section-subtitle">
        Everything you need for a hassle-free home-cooked meal experience.
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;