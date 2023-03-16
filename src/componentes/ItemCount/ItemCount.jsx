import { FiMinusCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import "./itemCount.css";
const ItemCount = ({ stock, initial = 1, onAdd, tf }) => {
  const [contador, setContador] = useState(initial);
  const [tYf, setTyF] = useState();
  useEffect(() => {
    setTyF(tf);
    setContador(initial);
  }, [initial, tf]);

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
      {tYf ? (
        <input
          type="submit"
          value="AGREGAR A MI PEDIDO"
          onClick={() => onAdd(contador)}
        />
      ) : undefined}
    </div>
  );
};

export default ItemCount;
