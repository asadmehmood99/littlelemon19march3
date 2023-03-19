import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img
            src={require("./assets/footer-logo.png")}
            alt="Little Lemon logo here"
          ></img>
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation Menu</h1>
          <ul className="footer-links">
            <Link to="/">Home page</Link>
            <Link to="/about">About us</Link>
            <a
              href={require("./assets/menu.jpg")}
              target="_blank"
              rel="noreferrer"
            >
              Menu Items
            </a>
            <Link to="/reservations">Reservations details</Link>
            <Link to="/order">Order Now <i class="fas fa-nintendo-switch    "></i></Link>
            <Link to="/login">Login/SignUp</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>47040 City center,</li>
            <li>Islamabad, Pakistan</li>
            <br></br>
            <li>051-563573738</li>
            <br></br>
            <a
              href="mailto: adminisb@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              adminisb@littlelemon.com
            </a>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a
              href="https://www.facebook.com/thelittlelemonshopisb/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook profile
            </a>
            <a
              href="https://www.instagram.com/littlelemonmoonisb/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram Id
            </a>
            <a
              href="https://www.youtube.com/watch?v=3Li-FfypZYE979797"
              target="_blank"
              rel="noreferrer"
            >
              Join our channel.
            </a>
          </ul>
        </li>
      </menu>
    </footer>
  );
}
