import "@fontsource/poppins";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Allsheds from "./pages/allsheds";
import Landingpage from "./pages/landingpage";
import SellerCard from "./pages/finalpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allsheds" element={<Allsheds />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/sellercard" element={<SellerCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
