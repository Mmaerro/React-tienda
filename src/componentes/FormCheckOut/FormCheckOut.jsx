import { useState } from "react";
import "./checkOut.css";

import {
  serverTimestamp,
  addDoc,
  collection,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckOut = ({ cart, total, clearCart, setOrderId }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    phone: "",
    direction: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: userInfo,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");

    // ACA CREAMOS LA ORDEN DE COMPRA EN LA COLECCION ORDERS
    addDoc(orderCollection, order)
      .then((res) => setOrderId(res.id))
      .catch((err) => console.log(err));

    // ACA DESCONTAMOS EL STOCK DE CADA PRODUCTO

    cart.map((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });

    clearCart();
  };

  return (
    <div className="check">
      <h3 className="titleProducts">Formulario de compra</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="text"
          placeholder="Ingrese su email"
          name="email"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <label htmlFor="phone">phone</label>
        <input
          type="text"
          placeholder="Ingrese su telefono"
          name="phone"
          onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
        />
        <label htmlFor="direction">direction</label>
        <input
          type="text"
          placeholder="Ingrese su Direccion"
          name="direction"
          onChange={(e) =>
            setUserInfo({ ...userInfo, direction: e.target.value })
          }
        />
        <button>Comprar</button>
      </form>
    </div>
  );
};

export default FormCheckOut;
