import "./cart.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  return (
    <div className="cart">
      <Link to="/cart">
        <AiOutlineShoppingCart /> <span>{getTotalItems()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
