import { Link } from "react-router-dom";
import "./Footer.scss";
const Footer = () => {
  return (
    <section className="section footer_main pb1">
      <div className="container">
        <div className="row custom_footer">
          <div className="col-md-2">
            <img src="./images/gradstoc_logo.png" alt="logo" />
          </div>
          <div className="col-md-2">
            <div className="footer_title">Company</div>
            <div className="footer_list">
              <ul>
                <Link to="/">About Us</Link>
                <Link to="/">Blog</Link>
                <Link to="/">Sitemap</Link>
                <Link to="/">Become an Expert</Link>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer_title">Legal</div>
            <div className="footer_list">
              <ul>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Copyright Policy</li>
                <li>Academic Integrity</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer_title">Help & Support</div>
            <div className="footer_list">
              <ul>
                <li>FAQ</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer_title">Social media</div>
            <div className="footer_list_ver">
              <ul>
                <li>
                  <img src="./images/footer_facebook.png" alt="facebook"></img>
                </li>
                <li>
                  <img src="./images/footer_insta.png" alt="insta"></img>
                </li>
                <li>
                  <img src="./images/footer_twitter.png" alt="twitter"></img>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-md-2">
            <div className="footer_title">Language</div>
            <div className="footer_list">
              <select className="form-select" aria-label="Default select example">
                <option selected>English</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="copyright">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
