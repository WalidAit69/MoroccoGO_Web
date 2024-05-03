import "./App.css";
import "./pages/Home.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import AuthModal from "./components/navbar/AuthModal";
import { useEffect, useState } from "react";

function App() {
  const [ShowAuth, setShowAuth] = useState(false);

  useEffect(() => {
    ShowAuth
      ? document.body.classList.add("dark-overlay")
      : document.body.classList.remove("dark-overlay");
  }, [ShowAuth]);

  return (
    <>
      <Navbar setShowAuth={setShowAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      {ShowAuth && <AuthModal setShowAuth={setShowAuth} />}
    </>
  );
}

export default App;
