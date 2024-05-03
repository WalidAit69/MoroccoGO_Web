import { FaGoogle } from "react-icons/fa";
import logo from "../../assets/logo-green.png";
import { FiMail } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import Signin from "./Signin";
import Signup from "./Signup";
import { motion } from "framer-motion";

interface Props {
  setShowAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthModal = ({ setShowAuth }: Props) => {
  const [RegistrationType, setRegistrationType] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className={`Auth_Modal ${RegistrationType && "registration"} ${
        RegistrationType === "signup" && "registrationSignUp"
      }`}
    >
      <div className="Auth_Modal_container">
        <button
          className="Auth_modal_close"
          onClick={() => {
            setShowAuth(false);
          }}
        >
          <IoMdClose size={25} />
        </button>

        {RegistrationType && (
          <button
            className="Auth_modal_back"
            onClick={() => setRegistrationType("")}
          >
            <IoChevronBack size={20} />
          </button>
        )}

        {!RegistrationType && (
          <div>
            <div className="Auth_Modal_top">
              <img src={logo} alt="logo" />
              <span>Sign in to unlock the best of Morocco.</span>
            </div>
            <div className="Auth_Modal_middle">
              <button className="secondary_btn">
                <div className="icon">
                  <FaGoogle size={22} />
                </div>
                Continue with Google
              </button>
              <button
                className="secondary_btn"
                onClick={() => setRegistrationType("signin")}
              >
                <div className="icon">
                  <FiMail size={22} />
                </div>
                Continue with Email
              </button>
            </div>
          </div>
        )}

        {RegistrationType === "signin" && (
          <Signin setRegistrationType={setRegistrationType} />
        )}

        {RegistrationType === "signup" && (
          <Signup setRegistrationType={setRegistrationType} />
        )}

        <div className="Auth_Modal_bottom">
          <p>
            By proceeding, you agree to our Terms of Use and confirm you have
            read our Privacy and Cookie Statement.
          </p>
          <p>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthModal;
