import { Route, Routes } from "react-router-dom";
import "./AppStyles.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </>
  );
}

export default App;
