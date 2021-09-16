import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h6>About</h6>
            <p className="text-justify">
              LocalDekho <i>LOCAL SERVICE PLATFORM </i> is a platform to connect
              service providers with and the customrs in a very easy way. One
              can easily request for a service and filter providers based on
              ratings and charges.
            </p>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="footer__row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="/"> LocalDekho</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="/">
                  <i className="bx bxl-facebook-circle bx-burst"></i>
                </a>
              </li>

              <li>
                <a className="dribbble" href="/">
                  <i className="bx bxl-github bx-burst"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="/">
                  <i className="bx bxl-linkedin-square bx-burst"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
