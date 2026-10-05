import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeleteRequest.css";

function DeleteRequest() {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedId = userId.trim();

    if (!trimmedId) {
      alert("Please enter your User ID.");
      return;
    }

    navigate(`/submit-delete-req?id=${encodeURIComponent(trimmedId)}`);
  };

  return (
    <div className="delete-page">
      <div className="delete-card">
        <h1>Delete Request</h1>

        <p className="delete-description">
          Enter your User ID to proceed with the account deletion request.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="userId">Enter your User ID</label>

          <input
            id="userId"
            type="text"
            placeholder="USER#1234"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <button type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteRequest;