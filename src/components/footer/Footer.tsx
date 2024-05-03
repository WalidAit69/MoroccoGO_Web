import "./footer.css";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer container_inner">
        <div className="footer_top">
          <div className="footer_top_left">
            <ul>
              <span>About Morocco Go</span>
              <li>
                <button>About Us</button>
              </li>
              <li>
                <button>Resources and Policies</button>
              </li>
              <li>
                <button>Careers</button>
              </li>
              <li>
                <button>Trust & Safety</button>
              </li>
              <li>
                <button>Contact us</button>
              </li>
            </ul>
            <ul>
              <span>Explore</span>
              <li>
                <button>Write a review</button>
              </li>
              <li>
                <button>Add a Place</button>
              </li>
              <li>
                <button>Join</button>
              </li>
              <li>
                <button>Travelers' Choice</button>
              </li>
              <li>
                <button>Help Center</button>
              </li>
            </ul>
            <ul>
              <span>Do Business With Us</span>
              <li>
                <button>Owners</button>
              </li>
              <li>
                <button>Business Advantage</button>
              </li>
              <li>
                <button>Sponsored Placements</button>
              </li>
              <li>
                <button>Advertise with Us</button>
              </li>
              <li>
                <button>Become an Affiliate</button>
              </li>
            </ul>
          </div>

          <ul>
            <span>Get The App</span>
            <li>
              <button>Iphone App</button>
            </li>
            <li>
              <button>Android App</button>
            </li>
          </ul>
        </div>

        <div className="footer_bottom">
          <div className="footer_bottom_left">
            <img src={logo} alt="" />
            <span>© 2024 Morocco GO LLC All rights reserved.</span>
          </div>

          <div className="footer_bottom_right">
            <select name="currency" id="currency">
              <option value="option1">$ U.S. Dollars</option>
              <option value="option2">€ Euros</option>
              <option value="option2">MAD</option>
            </select>
            <div>
              <a href="#">
                <FaInstagram size={22} />
              </a>
              <a href="#">
                <FaTiktok size={22} />
              </a>
              <a href="#">
                <FaFacebook size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
