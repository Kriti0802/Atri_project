import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Start from "./pages/Start.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
<Route path="/start" element={<Start />} />
    </Routes>
  );
}
