import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <Link to="/">
          <img
            src={require("./assets/nav-logo.png")}
            alt="Little Lemon logo here"
            className="nav-image"
          ></img>
        </Link>
      )}
      <Link className="hover-effect" to="/">
        <h1>Home</h1>
      </Link>
      <Link className="hover-effect" to="/about">
        <h1>About us</h1>
      </Link>
      <a
        className="hover-effect"
        href={require("./assets/menu.jpg")}
        target="_blank"
        rel="noreferrer"
      >
        <h1>Menu Items</h1>
      </a>
      <Link className="hover-effect" to="/reservations">
        <h1>Reservations details</h1>
      </Link>
      <Link className="hover-effect" to="/order">
        <h1>Order Now</h1>
      </Link>
      <Link className="hover-effect" to="/login">
        <h1>Login/SignUp</h1>
      </Link>
    </menu>
  );
}
