import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ConnectTwitterPage from "./Pages/ConnectTwitterPage/ConnectTwitterPage";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/connect" element={<ConnectTwitterPage />} />
        </Routes>
    </div>
  );
}

export default App;
