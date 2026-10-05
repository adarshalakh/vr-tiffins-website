import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./SubmitDeleteReq.css";

function SubmitDeleteReq() {
  const [searchParams] = useSearchParams();

  const userId = searchParams.get("id");

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  const handleDeleteRequest = async () => {
    if (!userId) {
      setError("User ID is missing.");
      return;
    }

    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch(
        "https://e7p4l6r6m2.execute-api.ap-south-1.amazonaws.com/deployment/delete_request_user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pk: userId,
          }),
        }
      );

      const data = await res.json();

      setResponse(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="submit-delete-page">
      <div className="submit-delete-card">
        <h1>Submit Delete Request</h1>

        <p className="warning-text">
          Are you sure you want to delete your account?
          <br />
          This action cannot be undone!
        </p>

        <div className="user-id-box">
          <span>User ID</span>
          <strong>{userId || "Not provided"}</strong>
        </div>

        <button
          className="submit-delete-button"
          onClick={handleDeleteRequest}
          disabled={loading || !userId}
        >
          {loading ? "Submitting..." : "Submit Delete Request"}
        </button>

        {error && (
          <div className="delete-error">
            {error}
          </div>
        )}

        {response && (
          <div className="delete-response">
            <h2>Response</h2>

            <pre>
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default SubmitDeleteReq;