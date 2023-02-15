import { useState } from "react";
import './itemCount.css'
const ItemCount = ({ stock, initial=1, agregarAlCarrito }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="count">
      <span>{contador}</span>
      <div>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      </div>
      <input type="submit" value="AGREGAR A MI PEDIDO" onClick={() => agregarAlCarrito(contador)}/>
     
    </div>
  );
};

export default ItemCount;
