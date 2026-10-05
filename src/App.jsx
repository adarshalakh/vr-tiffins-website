import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DeleteRequest from "./pages/DeleteRequest";
import SubmitDeleteReq from "./pages/SubmitDeleteReq";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/privacy-policy"
          element={
            <PrivacyPolicy
              onClose={() => window.history.back()}
            />
          }
        />

        <Route
          path="/delete-request"
          element={<DeleteRequest />}
        />

        <Route
          path="/submit-delete-req"
          element={<SubmitDeleteReq />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;