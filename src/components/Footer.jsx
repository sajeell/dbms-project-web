import React from "react";

import "./styles/bootstrap-4.1.2/bootstrap.min.css";
import "./plugins/font-awesome-4.7.0/css/font-awesome.min.css";
import "./styles/main_styles.css";
// import "./styles/responsive.css";

import logo2 from "./assets/crown.svg";

const Footer = () => {
  return (
    <div className="Footer-wrapper">
      <footer className="footer">
        <div className="footer_content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 footer_col">
                <div className="footer_about">
                  <div className="footer_logo">
                    <a href="/">
                      <div className="d-flex flex-row align-items-center justify-content-start">
                        <div className="footer_logo_icon">
                          <img src={logo2} alt="" />
                        </div>
                        <div>Stitchers101</div>
                      </div>
                    </a>
                  </div>
                  <div className="footer_about_text">
                    <p>
                      The idea that every person on this earth should fit into
                      the same old, faulty off-the-rack sizes is an idea we want
                      to challenge. Instead, experience an unrivaled fit and
                      feel in a Tailor Store dress shirt made just for you, with
                      your unique measurements in mind.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 footer_col">
                <div className="footer_menu">
                  <div className="footer_title">Support</div>
                  <ul className="footer_list">
                    <li>
                      <a href="/">
                        <div>
                          Customer Service
                          <div className="footer_tag_1">online now</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div>Return Policy</div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div>
                          Size Guide
                          <div className="footer_tag_2">recommended</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div>Terms and Conditions</div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div>Contact</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 footer_col">
                <div className="footer_contact">
                  <div className="footer_title">Stay in Touch</div>
                  <div className="newsletter">
                    <form
                      action="#"
                      id="newsletter_form"
                      className="newsletter_form"
                    >
                      <input
                        type="email"
                        className="newsletter_input"
                        placeholder="Subscribe to our Newsletter"
                        required="required"
                      />
                      <button className="newsletter_button">+</button>
                    </form>
                  </div>
                  <div className="footer_social">
                    <div className="footer_title">Social</div>
                    <ul className="footer_social_list d-flex flex-row align-items-start justify-content-start">
                      <li>
                        <a href="/">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i
                            className="fa fa-youtube-play"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bar">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="footer_bar_content d-flex flex-md-row flex-column align-items-center justify-content-start">
                  <div className="copyright order-md-1 order-2">
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>
                    All rights reserved | This template is made with
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                  </div>
                  <nav className="footer_nav ml-md-auto order-md-2 order-1">
                    <ul className="d-flex flex-row align-items-center justify-content-start">
                      <li>
                        <a href="category.html">Women</a>
                      </li>
                      <li>
                        <a href="category.html">Men</a>
                      </li>
                      <li>
                        <a href="category.html">Kids</a>
                      </li>
                      <li>
                        <a href="category.html">Home Deco</a>
                      </li>
                      <li>
                        <a href="/">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
