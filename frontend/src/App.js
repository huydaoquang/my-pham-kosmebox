import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/Navbar/NavBar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function getData() {
      const res = await axios.get("v1/cosmetics");
      return res;
    }
    getData().then((res) => console.log(res));
    getData().catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <div className="min-h-screen flex flex-col gap-3">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
