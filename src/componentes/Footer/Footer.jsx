import { Link } from "react-router-dom";
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
          <Link to={"/"}>
            <BsInstagram className="i" />
          </Link>
          <Link to={"/"}>
            <BsWhatsapp className="i" />
          </Link>
          <Link to={"/"}>
            <BsFacebook className="i" />
          </Link>
        </div>
      </div>
      <div className="legal">
        <ul>
          <li>
            <Link to={"/"}>Politica De Privacidad</Link>
          </li>
          <li>
            <Link to={"/"}>Preferencias De Cookies</Link>
          </li>
          <li>
            <Link to={"/"}>Accesibilidad</Link>
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
