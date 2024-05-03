import logo from "../../assets/logo-green.png";

interface Props {
  setRegistrationType: React.Dispatch<React.SetStateAction<string>>;
}

const Signin = ({ setRegistrationType }: Props) => {
  return (
    <div>
      <div className="Auth_Modal_top">
        <img src={logo} alt="logo" />
        <span>Welcome back.</span>
      </div>
      <form className="Auth_Modal_middle">
        <div className="Auth_Modal_input">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Email" />
        </div>

        <div className="Auth_Modal_input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
        </div>

        <button className="ghost_btn">Forgot password?</button>

        <button className="primary_btn">Sign in</button>

        <div className="seperator">
          <div className="seperator_textContainer">
            <span>Not a member?</span>
            <div className="seperator_line"></div>
          </div>{" "}
          <span>
            <button
              className="ghost_btn"
              onClick={() => setRegistrationType("signup")}
            >
              Join
            </button>{" "}
            to unlock the best of Morocco.
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signin;
