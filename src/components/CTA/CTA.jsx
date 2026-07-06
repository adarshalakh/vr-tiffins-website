import "./CTA.css";
import { FaGooglePlay, FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="cta" id="cta">
      <div className="cta-content">

        <span className="cta-tag">
          🍱 Healthy • Fresh • Home-style Meals
        </span>

        <h2>
          Ready to Enjoy
          <br />
          Healthy Home-Cooked Meals?
        </h2>

        <p>
          Join hundreds of happy customers who enjoy fresh,
          hygienic meals delivered straight to their doorstep.
          Download the VR Tiffins app today and start your meal journey.
        </p>

        <div className="cta-buttons">
          <a
            href="/app/VR-Tiffins.apk"
            download
            className="download-btn"
          >
            Download App
          </a>

          <a href="#plans" className="learn-btn">
            Explore Plans
          </a>
        </div>

      </div>
    </section>
  );
};

export default CTA;