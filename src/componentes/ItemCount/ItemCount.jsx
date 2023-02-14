import { useState } from "react";

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
    <div>
      <h1>{contador}</h1>

      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={() => agregarAlCarrito(contador)}>
        Agregar Al carrito
      </button>
    </div>
  );
};

export default ItemCount;
