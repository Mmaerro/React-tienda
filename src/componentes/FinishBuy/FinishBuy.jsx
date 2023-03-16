import React from "react";
import { Link } from "react-router-dom";
import "./finishBuy.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const FinishBuy = ({ orderId }) => {
  return (
    <div className="finish">
      <h3 className="titleProducts">Compra finalizada!!!</h3>
      <h4>El id de tu compra es: </h4>
      <p>
        <span>
          <CheckCircleIcon sx={{ fontSize: "30px" }} />
        </span>
        <b>{orderId}</b>
      </p>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#000",
          margin: "10px",
          display: "flex",
          marginTop: "50px",
          justifyContent: "center",
          borderBottom: "1px solid #fff",
          width: "200px",
        }}
      >
        Seguir comprando
        <ShoppingBagIcon sx={{ paddingLeft: "20px", color: "#fff" }} />
      </Link>
    </div>
  );
};

export default FinishBuy;
