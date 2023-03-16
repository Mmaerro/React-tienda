import React, { useContext, useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { MdOutlineReadMore } from "react-icons/md";
import Alert from "@mui/material/Alert";

import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ProductCard.css";
import Selectors from "../selects/Selectors";

const ProductCard = ({ element }) => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [alert, setAlert] = useState("");
  const [meat, setMeat] = useState("");
  const [guarnis, setGuarnis] = useState("");

  const [data, setData] = useState([]);
  const getSalsa = (e) => {
    setData(e);
  };

  useEffect(() => {}, [data]);

  const onAdd = (cantidad) => {
    if (meat !== "" && guarnis !== "" && data !== []) {
      const obj = {
        ...element,
        quantity: cantidad,
        necar: meat,
        guarnicion: guarnis,
        salsas: data,
      };
      addToCart(obj);
      setAlert("hecho");
      setData([]);
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
  const styleAlert = {
    zIndex: "999900",
    fontSize: "10px",
    padding: "5px",
    width: "200px",
    position: "absolute",
    bottom: "-177px",
    left: "-10px",
  };

  const sizeMeat = [
    { label: "Simple", value: "simple" },
    { label: "Doble", value: "doble" },
    { label: "Triple", value: "triple" },
  ];
  const guarnicion = [
    { label: "Sin Guarnicion", value: "sin guarnicion" },
    { label: "Fritas", value: "fritas" },
    { label: "Aros", value: "aros" },
    { label: "Rusticas", value: "rusticas" },
    { label: "Boniatos", value: "boniatos" },
  ];
  const selectOne = (value) => {
    setMeat(value.value);
  };
  const selectTwo = (value) => {
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
          <ul className="ul">
            <li>{element.description}</li>
            {alert === "false" ? (
              <li className="alert">
                <Alert style={styleAlert} severity="error">
                  Por favor seleccinar <b>Tamaño,</b>
                  <b>Salsas</b> y <b>Guarnicion</b>
                </Alert>
              </li>
            ) : alert === "hecho" ? (
              <li className="alert">
                <Alert style={styleAlert} severity="success">
                  <b>Agregado al Carrito!</b>
                </Alert>
              </li>
            ) : undefined}
            <li style={{ position: "absolute", bottom: "50px" }}>
              {element.category === "hambur" &&
              element.title !== "Pollo Crispy" ? (
                <Select
                  className="firstSelect"
                  options={sizeMeat}
                  isSearchable={false}
                  onChange={selectOne}
                />
              ) : (
                <Select
                  onChange={selectOne}
                  className="firstSelect"
                  isSearchable={false}
                  options={[{ label: "Simple", value: "simple" }]}
                />
              )}
            </li>
            <li style={{ position: "absolute", bottom: "10px" }}>
              <Select
                onChange={selectTwo}
                className="secondSelect"
                options={guarnicion}
                isSearchable={false}
                name="Guarnicion"
              />
            </li>
            <li>
              <Selectors child={getSalsa} />
            </li>
          </ul>
        ) : (
          <ul className="ul">
            <li>{element.description}</li>
          </ul>
        )}
        <ItemCount
          stock={element.stock}
          initial={quantity}
          onAdd={onAdd}
          tf={true}
        />
      </figure>
    </div>
  );
};

export default ProductCard;
