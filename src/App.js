import { Route, Routes } from "react-router-dom";
import "./AppStyles.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Products from "./components/pages/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services" element={<Products />} />
        <Route path="/services" element={<SignUp />} />{" "}
      </Routes>
    </>
  );
}

export default App;
