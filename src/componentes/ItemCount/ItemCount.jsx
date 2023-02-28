import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useEffect, useState } from "react";

import "./itemCount.css";
const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  useEffect(() => {
    setContador(initial);
  }, [initial]);

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
      <div>
        <button onClick={sumar}>
          <CiCirclePlus />
        </button>
        <button onClick={restar}>
          <CiCircleMinus />
        </button>
        <span>{contador}</span>
      </div>
      <input
        type="submit"
        value="AGREGAR A MI PEDIDO"
        onClick={() => onAdd(contador)}
      />
    </div>
  );
};

export default ItemCount;
