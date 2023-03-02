import React, { useContext, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { MdOutlineReadMore } from "react-icons/md";
import Alert from "@mui/material/Alert";

import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ProductCard.css";

const ProductCard = ({ element }) => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [alert, setAlert] = useState("");
  const [meat, setMeat] = useState("");
  const [guarnis, setGuarnis] = useState("");

  const onAdd = (cantidad) => {
    if (meat !== "" && guarnis !== "") {
      const obj = {
        ...element,
        quantity: cantidad,
        necar: meat,
        guarnicion: guarnis,
      };
      addToCart(obj);
      setAlert("hecho");
      setTimeout(() => {
        setAlert("");
      }, 2000);
    } else {
      setAlert("false");
      setTimeout(() => {
        setAlert("");
      }, 2000);
    }
  };

  const quantity = getQuantityById(element.id);
  const style = {
    fontSize: "15px",
    margin: "3px 0 0 2px",
  };

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
  const sls = (value) => {
    setMeat(value.value);
  };
  const slsc = (value) => {
    setGuarnis(value.value);
  };
  return (
    <div className="cards">
      <figure className="imgcard">
        <img src={element.img} alt={`${element.title}`} />
        <Link to={`/item/${element.id}`}>
          <p className="VerMas">
            Ver Mas <MdOutlineReadMore style={style} />
          </p>
        </Link>
        <figcaption>{element.title}</figcaption>
        {element.category === "hambur" || element.category === "veggie" ? (
          <ul>
            <li>{element.description}</li>
            {alert === "false" ? (
              <li>
                <Alert severity="error">
                  Por favor seleccinar Tamaño y Guarnicion
                </Alert>
              </li>
            ) : alert === "hecho" ? (
              <Alert severity="success">Agregado al Carrito!</Alert>
            ) : undefined}
            <li style={{ position: "absolute", bottom: "50px" }}>
              {element.category === "hambur" &&
              element.title !== "Pollo Crispy" ? (
                <Select
                  className="firstSelect"
                  options={sizeMeat}
                  isSearchable={false}
                  onChange={sls}
                />
              ) : (
                <Select
                  onChange={sls}
                  className="firstSelect"
                  isSearchable={false}
                  options={[{ label: "Simple", value: "simple" }]}
                />
              )}
            </li>
            <li style={{ position: "absolute", bottom: "10px" }}>
              <Select
                onChange={slsc}
                className="secondSelect"
                options={guarnicion}
                isSearchable={false}
                name="Guarnicion"
              />
            </li>
          </ul>
        ) : (
          <ul>
            <li>{element.description}</li>
          </ul>
        )}
        <ItemCount stock={element.stock} initial={quantity} onAdd={onAdd} />
      </figure>
    </div>
  );
};

export default ProductCard;
