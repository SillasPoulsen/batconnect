import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ConnectTwitterPage from "./Pages/ConnectTwitterPage/ConnectTwitterPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/connect" element={<ConnectTwitterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
