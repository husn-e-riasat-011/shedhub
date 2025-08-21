import "@fontsource/poppins";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Allsheds from "./pages/allsheds";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allsheds" element={<Allsheds />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
