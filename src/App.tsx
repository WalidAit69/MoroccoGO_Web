import "./App.css";
import "./pages/Home.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
