import React from 'react';
import { Link } from 'react-scroll';
import "./footer.scss";
import logo from "./logoOsher.png";
import cv from "./Junior Software Developer- Osher Nati.pdf"
function Footer() {
  return (
    <div>
      <footer className="footer" id="footer">
        <div className="footer__logo-box">
          <picture className="footer__logo">
            <img alt="Full logo" className="footer__logo" src={logo} />
          </picture>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item"><a href="https://www.facebook.com/osher.nati" target="_blank" className="footer__link">facebook</a></li>
                <li className="footer__item"><a href="https://www.linkedin.com/in/osher-nati-58bb5a197" target="_blank" className="footer__link">LinkdIn</a></li>
                <li className="footer__item"><a href="https://github.com/oshernati22" target="_blank" className="footer__link">GitHUB</a></li>
                <li className="footer__item"><Link to="contact" ><a href="#" className="footer__link">Email</a></Link></li>
                <li className="footer__item"><a download href={cv} className="footer__link">Resume</a></li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              <p> <a href="#" className="footer__link">Tel</a> : +972509454441 </p>
              <p> <a href="#" className="footer__link">Email</a> : oshernati22@gmail.com </p>
              <p> <a href="#" className="footer__link">Institution</a> : College of Management Academic Studies</p>
              <p>© 2021 Osher Nati - FullStack Devloper</p>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;