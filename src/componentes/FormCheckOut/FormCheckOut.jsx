import { useState } from "react";
import {
  serverTimestamp,
  addDoc,
  collection,
  updateDoc,
  doc,
} from "firebase/firestore";

const FormCheckOut = ({ cart, total, clearCart }) => {
  const [userInfo, setUserInfo] = useState({ name: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      buyer: userInfo,
      itmes: cart,
      total: total,
      date: serverTimestamp(),
    };
    clearCart();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su email"
          name="email"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingrese su telefono"
          name="phone"
          onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
        />
        <input type="submit" value="Comprar" />
      </form>
    </div>
  );
};

export default FormCheckOut;
