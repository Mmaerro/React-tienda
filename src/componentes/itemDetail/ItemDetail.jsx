import React, { useContext } from "react";
import Select from "react-select";

import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";

const ItemDetail = ({ product }) => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const onAdd = (cantidad) => {
    const obj = {
      ...product,
      quantity: cantidad,
    };
    addToCart(obj);
  };

  const quantity = getQuantityById(product.id);

  const sizeMeat = [
    { label: "Simple", value: "simple" },
    { label: "Doble", value: "doble" },
    { label: "Triple", value: "triple" },
  ];
  const guarnicion = [
    { label: "Sin Guarnicion", value: "sin" },
    { label: "Fritas", value: "fritas" },
    { label: "Aros", value: "aros" },
    { label: "Rusticas", value: "rusticas" },
    { label: "Boniatos", value: "boniatos" },
  ];
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
        <div className="cards itemDetail">
          <figure className="imgcard">
            <img src={product.img} alt={`${product.title}`} />
            <figcaption>{product.title}</figcaption>
            {product.category === "hambur" || product.category === "veggie" ? (
              <ul>
                <li>{product.description}</li>
                <li style={{ position: "absolute", bottom: "50px" }}>
                  {product.category === "hambur" &&
                  product.title !== "Pollo Crispy" ? (
                    <Select
                      className="firstSelect"
                      isClearable={true}
                      options={sizeMeat}
                      isSearchable={false}
                    />
                  ) : (
                    <Select
                      className="firstSelect"
                      isClearable={true}
                      isSearchable={false}
                      options={[{ label: "Simple", value: "simple" }]}
                    />
                  )}
                </li>
                <li style={{ position: "absolute", bottom: "10px" }}>
                  <Select
                    isClearable={true}
                    className="secondSelect"
                    options={guarnicion}
                    isSearchable={false}
                    name="Guarnicion"
                  />
                </li>
              </ul>
            ) : (
              <ul>
                <li>{product.description}</li>
              </ul>
            )}
            <ItemCount stock={product.stock} initial={quantity} onAdd={onAdd} />
          </figure>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
