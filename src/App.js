import { Route, Routes } from "react-router-dom";
import "./AppStyles.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
