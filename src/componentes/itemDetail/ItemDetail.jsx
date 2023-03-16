import React from "react";
import Select from "react-select";
import Alert from "@mui/material/Alert";

import GuarniMeat from "../Guarniciones/Meat";
import GuarniVeggie from "../Guarniciones/Veggie";

import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";
import Selectors from "../selects/Selectors";

const ItemDetail = ({
  product,
  quantity,
  onAdd,
  addMeat,
  addGuarni,
  alert,
  getSalsa,
}) => {
  const styleAlert = {
    zIndex: "999900",
    fontSize: "10px",
    padding: "2px",
    width: "fit-content",
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
      <h3 className="titleProducts">{product.title}</h3>
      <div className="detail">
        <div className="cards itemDetail">
          <figure className="imgcard">
            <img src={product.img} alt={`${product.title}`} />
            <figcaption>{product.title}</figcaption>
            {product.category === "hambur" || product.category === "veggie" ? (
              <ul className="ul">
                <li>{product.description}</li>
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
                  {product.category === "hambur" &&
                  product.title !== "Pollo Crispy" ? (
                    <Select
                      className="firstSelect"
                      onChange={(e) => addMeat(e.value)}
                      isClearable={true}
                      options={sizeMeat}
                      isSearchable={false}
                    />
                  ) : (
                    <Select
                      className="firstSelect"
                      onChange={(e) => addMeat(e.value)}
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
                    onChange={(e) => addGuarni(e.value)}
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
                <li>{product.description}</li>
              </ul>
            )}
            <ItemCount
              tf={true}
              stock={product.stock}
              initial={quantity}
              onAdd={onAdd}
            />
          </figure>
        </div>
        <div className="guar">
          {product.category === "hambur" ? (
            <GuarniMeat />
          ) : product.category === "veggie" ? (
            <GuarniVeggie />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
