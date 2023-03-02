import { FiMinusCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
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
          <FiPlusCircle />
        </button>
        <button onClick={restar}>
          <FiMinusCircle />
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
