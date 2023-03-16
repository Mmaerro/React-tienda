import React from "react";
import "./footer.css";
import img from "../../assets/img/logWebb.png";
import { BsInstagram, BsWhatsapp, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="foot">
      <div className="cla">
        <img
          src="https://res.cloudinary.com/dcm170r29/image/upload/v1676387375/Sin_t%C3%ADtulo-2_ahabch.gif"
          alt=""
        />
      </div>
      <div className="icons-idioma">
        <div className="icons">
          <a href="#">
            <BsInstagram className="i" />
          </a>
          <a href="#">
            <BsWhatsapp className="i" />
          </a>
          <a href="#">
            <BsFacebook className="i" />
          </a>
        </div>
      </div>
      <div className="legal">
        <ul>
          <li>
            <a href="#">Politica De Privacidad</a>
          </li>
          <li>
            <a href="#">Preferencias De Cookies</a>
          </li>
          <li>
            <a href="#">Accesibilidad</a>
          </li>
        </ul>
      </div>
      <div className="register">
        <p className="titulo-final">
          &copy;MMAERRO | Matias Maerro <img src={img} alt="" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
