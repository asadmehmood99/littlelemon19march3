import HeroImage from "../assets/imp1.jpg";
import { Link } from "react-router-dom";
export default function Confirmation() {
  return (
    <header className="confirmation-header">
      <img
        className="confirmation-image"
        src={HeroImage}
        alt="Little Lemon Recepie"
      ></img>
      <section className="reserve-header-text">
        <h1>congratulation Reservaion confirmed</h1>
        <h4>All detils are sent to your Mail address</h4>
        <h4>Thanks for choosing us!</h4>
      </section>

      <section className="redirect-buttons">
        <a
          className="redirect-button"
          href={require("../assets/menu.jpg")}
          target="_blank"
          rel="noreferrer"
        >
          Search Menu
        </a>
        <Link className="redirect-button" to="/order">
          Order Now
        </Link>
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
      </section>
    </header>
  );
}
