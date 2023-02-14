import React from 'react'

import './itemDetail.css'

const ItemDetail = ({ product }) => {

  return (
    <>
      <div className="contlogo">
        <span></span>
        <img
          className="logo"
          src="https://res.cloudinary.com/dcm170r29/image/upload/v1675871336/logo_vrnkr8.gif"
          alt=""
        />
        <span></span>
      </div>
      <div className="detail">
        <h3 className="titleProducts">{product.title}</h3>
        <div className="cards ">
          <figure className="imgcard">
            <img src={product.img} alt={`${product.title}`} />
            <figcaption>{product.title}</figcaption>
            <ul>
              <li>{product.description}</li>
              
            </ul>
            {product.category === "hambur" || product.category === "veggie" ? (
              <form action="" method="POST">
                {product.category === "hambur" &&
                product.title !== "Pollo Crispy" ? 
                  <select name="meat" id="">
                    <option value="simple">Simple</option>
                    <option value="doble">Doble</option>
                    <option value="triple">Triple</option>
                  </select>
                 : 
                  <select name="meat" id="">
                    <option value="simple">Simple</option>
                  </select>
                }

                <select name="guarni" id="">
                  <option value="sin">Sin guarnicion</option>
                  <option value="fritas">Fritas</option>
                  <option value="aros">Aros</option>
                  <option value="rusticas">Rusticas</option>
                  <option value="boniatos">Boniatos</option>
                </select>
                <input type="submit" value="AGREGAR A MI PEDIDO" />
              </form>
            ) : undefined}
          </figure>
        </div>
      </div>
    </>
  );
}

export default ItemDetail