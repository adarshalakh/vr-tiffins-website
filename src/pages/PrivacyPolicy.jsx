
import "./PrivacyPolicy.css";

const PrivacyPolicy = ({ onClose }) => {
  return (
    <div className="privacy-overlay" onClick={onClose}>
      <div
        className="privacy-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="privacy-close"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Close clicked");
            onClose();
          }}
          aria-label="Close privacy policy"
        >
          &times;
        </button>

        <header className="privacy-header">
          <h1 id="privacy-title">Privacy Policy</h1>
          <p>VR Tiffins</p>
          <span>Last Updated: October 2026</span>
        </header>

        <main className="privacy-content">
          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to VR Tiffins. We value your privacy and are
              committed to protecting your personal information.
              This Privacy Policy explains how information may be
              collected, used, and protected when you use our
              application and services.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>
              Depending on the features you use, VR Tiffins may
              collect information such as:
            </p>
            <ul>
              <li>Name and contact details</li>
              <li>Delivery address</li>
              <li>Meal preferences and order details</li>
              <li>Account and app usage information</li>
              <li>Payment transaction details, where applicable</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>
              Information may be used to process orders, manage
              subscriptions, arrange deliveries, respond to
              customer queries, and improve our services.
            </p>
          </section>

          <section>
            <h2>4. Information Sharing</h2>
            <p>
              Personal information may be shared with service
              providers when necessary to operate the service,
              such as delivery or payment partners. We do not
              claim to sell your personal information.
            </p>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>
              We take reasonable measures to protect information
              against unauthorized access, loss, or misuse.
              However, no method of electronic storage or
              transmission is completely secure.
            </p>
          </section>

          <section>
            <h2>6. Your Privacy Choices</h2>
            <p>
              You may contact us to ask about your personal
              information, request corrections, or raise
              privacy-related concerns, subject to applicable
              laws and operational requirements.
            </p>
          </section>

          <section>
            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not specifically directed at
              children. If you believe a child has provided
              personal information inappropriately, please
              contact us.
            </p>
          </section>

          <section>
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to
              time. Any revised version will be published
              with an updated date.
            </p>
          </section>

          <section>
            <h2>9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy,
              contact us at support@vrtiffins.com.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
