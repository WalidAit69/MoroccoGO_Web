import Menu from "../../widgets/Menu";
import logo from "../../assets/logogreen-full.png";
import user from "../../assets/user.png";
import { motion } from "framer-motion";
import "./navbar.css";
import { useState } from "react";

interface Props {
  setShowAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setShowAuth }: Props) => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const handleUserClick = () => {
    setShowAuth(true);
  };

  return (
    <header className="header">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
        className="header-left"
      >
        <Menu MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
        className="header-middle"
      >
        <ul>
          <button>
            <li>Discover</li>
          </button>
          <button>
            <li>Trips</li>
          </button>
          <img src={logo} alt="logo" />
          <button>
            <li>Review</li>
          </button>
          <button>
            <li>More</li>
          </button>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
        className="header-right"
      >
        <button className="userbtn" onClick={handleUserClick}>
          <img src={user} alt="user" />
        </button>
      </motion.div>
    </header>
  );
};

export default Navbar;
