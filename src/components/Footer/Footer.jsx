import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";
import "./FooterStyles.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <NavLink to="/sign-up">How it works</NavLink>
            <NavLink to="/">Testimonials</NavLink>
            <NavLink to="/">Careers</NavLink>
            <NavLink to="/">Investors</NavLink>
            <NavLink to="/">Terms of Service</NavLink>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <NavLink to="/">Contact</NavLink>
            <NavLink to="/">Support</NavLink>
            <NavLink to="/">Destinations</NavLink>
            <NavLink to="/">Sponsorships</NavLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <NavLink to="/">Submit Video</NavLink>
            <NavLink to="/">Ambassadors</NavLink>
            <NavLink to="/">Agency</NavLink>
            <NavLink to="/">Influencer</NavLink>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <NavLink to="/" className="social-logo">
              Vegemite <i class="fa-solid fa-dog" />
            </NavLink>
          </div>
          <small className="website-rights">
            Vegemite &copy; {new Date().getFullYear()}
          </small>
          <div className="social-icons">
            <NavLink
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </NavLink>
            <NavLink
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </NavLink>
            <NavLink
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </NavLink>
            <NavLink
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </NavLink>
            <NavLink
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
