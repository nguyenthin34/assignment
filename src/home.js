import "./aces/vendor/aos/aos.css";
import "./aces/vendor/bootstrap/css/bootstrap.min.css";
import "./aces/vendor/boxicons/css/boxicons.min.css";
import "./aces/vendor/venobox/venobox.css";
import "./aces/vendor/icofont/icofont.min.css";
import Navb from "./nav";
export default function Home() {
  return (
    // <img
    //   src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"
    //   className="img-fluid"
    //   style={{ width: 1500 }}
    // />
    <div>
      <div id="hero">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1">
              <h1>Your new digital experience with Bocor</h1>
              <h2>
                We are team of talanted designers making websites with Bootstrap
              </h2>
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img
                src="https://technext.github.io/bocor/assets/img/hero-img.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
