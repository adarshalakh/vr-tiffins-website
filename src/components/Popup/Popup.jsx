import "./Popup.css";

const Popup = ({ show, onClose }) => {

  if (!show) return null;

  return (
    <div className="popup-overlay">

      <div className="popup">

        <h2>Download the App</h2>

        <p>
          To subscribe to a meal plan, please download the
          VR Tiffins mobile application.
        </p>

        <div className="popup-buttons">

          <a
            href="/app/VR-Tiffins.apk"
            download
            className="download-popup"
          >
            Download App
          </a>

          <button onClick={onClose}>
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default Popup;