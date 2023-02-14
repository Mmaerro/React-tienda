import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineReadMore } from 'react-icons/md';

import "./ProductCard.css"

const ProductCard = ({ element }) => {
  const style = {
    fontSize:'15px', 
    margin:'3px 0 0 2px'
  }
return (
  <div className="cards">
    <figure className="imgcard">
      <img src={element.img} alt={`${element.title}`} />
      <Link to={`/item/${element.id}`}>
          <p className="VerMas" >Ver Mas   <MdOutlineReadMore style={style}/></p>
        </Link>
      <figcaption>{element.title}</figcaption>
      <ul>
        <li>{element.description}</li>
      
      </ul>
      <form action="" method="POST">
        {element.category === "hambur" && element.title !== "Pollo Crispy" ? (
          <select name="meat" id="">
            <option value="simple">Simple</option>
            <option value="doble">Doble</option>
            <option value="triple">Triple</option>
          </select>
        ) : (
          <select name="meat" id="">
            <option value="simple">Simple</option>
          </select>
        )}

        <select name="guarni" id="">
          <option value="sin">Sin guarnicion</option>
          <option value="fritas">Fritas</option>
          <option value="aros">Aros</option>
          <option value="rusticas">Rusticas</option>
          <option value="boniatos">Boniatos</option>
        </select>
        <input type="submit" value="AGREGAR A MI PEDIDO" />
      </form>
    </figure>
  </div>
);
};

export default ProductCard;