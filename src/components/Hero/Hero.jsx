import "./Hero.css";

import logo from "../../assets/icon/vr.jpeg";
import homeScreen from "../../assets/screenshots/ss2.jpeg";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <img src={logo} alt="VR Tiffins" className="hero-logo" />

        <span className="tag">Healthy Home Cooked Meals</span>

        <h1>
          Fresh Tiffins
          <br />
          Delivered To
          <span> Your Doorstep</span>
        </h1>

        <p>
          Enjoy hygienic, delicious and home-style meals with flexible weekly
          and monthly subscription plans.
        </p>

        <div className="hero-features">
          <div>✔ Fresh Ingredients</div>
          <div>✔ Daily Delivery</div>
          <div>✔ Pause Anytime</div>
        </div>

        <div className="hero-buttons">
          <a
            href="/app/VR-Tiffins.apk"
            download
            className="primary-btn"
          >
           Download App
          </a>

          <a href="#plans" className="secondary-btn">
            View Plans
          </a>
        </div>

      </div>

      <div className="hero-right">

        <div className="phone">

          <img src={homeScreen} alt="VR Tiffins App" />

        </div>

      </div>

    </section>
  );
};

export default Hero;