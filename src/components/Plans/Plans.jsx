import { useState } from "react";
import "./Plans.css";
import Popup from "../Popup/Popup";
import { FaCalendarAlt, FaUtensils } from "react-icons/fa";

const plans = [
  {
    title: "Weekly Plan",
    price: "₹1200",
    validity: "7 Days",
    meals: "14 Meal Credits",
    description: "Perfect for trying fresh home-cooked meals.",
    button: "Subscribe Now",
    popular: false,
  },
  {
    title: "Monthly Premium",
    price: "₹4500",
    validity: "30 Days",
    meals: "60 Meal Credits",
    description: "Our most popular subscription for daily healthy meals.",
    button: "Subscribe Now",
    popular: true,
  },
  {
    title: "One-time & Add-ons",
    price: "Starting ₹130",
    validity: "No Subscription",
    meals: "Order Anytime",
    description:
      "Try individual meals like Paneer Thali, Egg Curry Rice, Biryani, and more without any subscription.",
    button: "Order Now",
    popular: false,
  },
];
const Plans = () => {

  const [showPopup, setShowPopup] = useState(false);
  
  return (
    <section className="plans" id="plans">
      <h2>Choose Your Meal Plan</h2>
      <p className="section-subtitle">
        Flexible subscriptions designed for every lifestyle.
      </p>

      <div className="plans-grid">
        {plans.map((plan, index) => (
          <div
            className={`plan-card ${plan.popular ? "popular" : ""}`}
            key={index}
          >
            {plan.popular && <span className="badge">Most Popular</span>}

            <h3>{plan.title}</h3>

            <h1>{plan.price}</h1>

            <p>{plan.description}</p>

            <div className="plan-info">
              <div>
                <FaCalendarAlt /> {plan.validity}
              </div>

              <div>
                <FaUtensils /> {plan.meals}
              </div>
            </div>

            <button
              className="plan-btn"
              onClick={() => setShowPopup(true)}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      <Popup
        show={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </section>
  );
};

export default Plans;