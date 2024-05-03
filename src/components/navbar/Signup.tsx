import logo from "../../assets/logo-green.png";

interface Props {
  setRegistrationType: React.Dispatch<React.SetStateAction<string>>;
}

const Signup = ({ setRegistrationType }: Props) => {
  return (
    <div>
      <div className="Auth_Modal_top">
        <img src={logo} alt="logo" />
        <span>Join to unlock the best of Morocco.</span>
      </div>
      <form className="Auth_Modal_middle">
        <div className="Auth_Modal_row">
          <div className="Auth_Modal_input">
            <label htmlFor="FirstName">First Name</label>
            <input type="text" id="FirstName" placeholder="First Name" />
          </div>
          <div className="Auth_Modal_input">
            <label htmlFor="LastName">Last Name</label>
            <input type="LastName" id="LastName" placeholder="Last Name" />
          </div>
        </div>
        <div className="Auth_Modal_input">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Email" />
        </div>

        <div className="Auth_Modal_input">
          <label htmlFor="password">Create a password</label>
          <input type="password" id="password" placeholder="Password" />
        </div>

        <button className="primary_btn">Join</button>

        <div className="seperator">
          <div className="seperator_textContainer">
            <span>Already a member?</span>
            <div className="seperator_line"></div>
          </div>
          <span>
            <button
              className="ghost_btn"
              onClick={() => setRegistrationType("signin")}
            >
              Sign in
            </button>{" "}
            using your account.
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
