import "./assets/css/style.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/img/favicon.png";
import { NavLink } from "react-router-dom";
export default function Navb() {
  return (
    <div
      className="d-flex align-items-center "
      id="header"
      style={{ backgroundColor: "#336699" }}
    >
      <h1 class="logo me-auto">
        <h3 style={{ color: "white" }}>FPT Polytechnic Pro</h3>
      </h1>
      <nav id="navbar" className="navbar">
        <ul>
          <li className="nav-link scrollto active">
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-link scrollto">
            <NavLink to="/product" exact>
              Prodcut
            </NavLink>
          </li>
          <li className="nav-link scrollto">
            <NavLink to="/product/add">Add Product</NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="getstarted scrollto">
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" className="getstarted scrollto">
              Sign In
            </NavLink>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
    </div>
  );
}
