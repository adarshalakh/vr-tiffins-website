import "./HowItWorks.css";
import {
  FaUserPlus,
  FaClipboardList,
  FaMotorcycle,
  FaSmile,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Create Account",
    description: "Sign up quickly and set up your profile.",
  },
  {
    icon: <FaClipboardList />,
    title: "Choose a Plan",
    description: "Select the subscription that suits your lifestyle.",
  },
  {
    icon: <FaMotorcycle />,
    title: "Daily Delivery",
    description: "Fresh meals delivered to your doorstep on time.",
  },
  {
    icon: <FaSmile />,
    title: "Enjoy Your Meal",
    description: "Relish healthy, hygienic, and delicious home-style food.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how">
      <h2>How It Works</h2>
      <p className="section-subtitle">
        Start enjoying fresh meals in just a few simple steps.
      </p>

      <div className="steps">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-number">{index + 1}</div>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;