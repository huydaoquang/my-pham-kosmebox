import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/Navbar/NavBar";
import { CartContext } from "./constants/CartContext";
import Id1 from "./components/Detail/Id1";

function App() {
  const [cosmetics, setCosmetics] = useState([]);
  const [addToCart, setAddToCart] = useState([{}]);
  const [priceSum, setPriceSum] = useState(0);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("v1/cosmetics");
      return res;
    }
    getData().then((res) => setCosmetics(res.data));
    getData().then((res) => console.log(res.data));
    getData().catch((err) => console.log(err));
  }, []);
  return (
    <CartContext.Provider
      value={{ addToCart, setAddToCart, priceSum, setPriceSum }}
    >
      <Router>
        <div className="min-h-screen flex flex-col ">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home cosmetics={cosmetics} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/1" element={<Id1 />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
