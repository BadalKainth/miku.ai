import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
