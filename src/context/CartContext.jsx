import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const randomKey = () => {
    let key = Math.random() * 874692;
    return key;
  };

  const changeSelect = (value, prodId, tipo) => {
    if (tipo === "necar") {
      let newCart = cart.map((item) => {
        let newPrice = guarniCart(item.guarnicion, value);
        if (item.key === prodId) {
          let newProduct = {
            ...item,
            necar: value,
            price: newPrice,
          };
          return newProduct;
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      let newCart = cart.map((item) => {
        let newPrice = guarniCart(value, item.necar);
        if (item.key === prodId) {
          let newProduct = {
            ...item,
            guarnicion: value,
            price: newPrice,
          };
          return newProduct;
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  const addToCart = (product) => {
    let exist = isInCart(product.id, product.necar, product.guarnicion);
    if (exist !== "") {
      let newCart = cart.map((item) => {
        if (exist === item.key) {
          let newProduct = {
            ...item,
            quantity: product.quantity,
          };
          return newProduct;
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      let key = randomKey();
      let newPrice = guarniCart(product.guarnicion, product.necar);
      let newProduct = {
        ...product,
        key: key,
        price: newPrice,
      };
      setCart([...cart, newProduct]);
    }
  };

  const deleteProductById = (key) => {
    let newCart = cart.filter((product) => product.key !== key);

    setCart(newCart);
  };

  const isInCart = (id, necar, guarni) => {
    let exists = "";
    cart.map((item) => {
      if (
        item.id === id &&
        item.necar === necar &&
        item.guarnicion === guarni
      ) {
        exists = item.key;
        return exists;
      } else {
        let exists = "";
        return exists;
      }
    });
    return exists;
  };

  const getQuantityById = (id) => {
    let product = cart.find((element) => element.key === id);
    return product?.quantity;
  };

  const getTotalItems = () => {
    const total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);

    return total;
  };

  const getTotalPrice = () => {
    const total = cart.reduce((acc, element) => {
      return acc + element.price * element.quantity;
    }, 0);

    return total;
  };

  const guarniCart = (guarni, meat) => {
    let value = "";

    if (guarni === "sin guarnicion" && meat === "simple") {
      value = "290";
    } else if (guarni === "sin guarnicion" && meat === "doble") {
      value = "350";
    } else if (guarni === "sin guarnicion" && meat === "triple") {
      value = "410";
    } else if (guarni === "fritas" && meat === "simple") {
      value = "360";
    } else if (guarni === "fritas" && meat === "doble") {
      value = "420";
    } else if (guarni === "fritas" && meat === "triple") {
      value = "480";
    } else if (guarni === "boniatos" && meat === "simple") {
      value = "480";
    } else if (guarni === "boniatos" && meat === "doble") {
      value = "540";
    } else if (guarni === "boniatos" && meat === "triple") {
      value = "600";
    } else if (guarni === "rusticas" && meat === "simple") {
      value = "400";
    } else if (guarni === "rusticas" && meat === "doble") {
      value = "460";
    } else if (guarni === "rusticas" && meat === "triple") {
      value = "500";
    } else if (guarni === "aros" && meat === "simple") {
      value = "400";
    } else if (guarni === "aros" && meat === "doble") {
      value = "460";
    } else if (guarni === "aros" && meat === "triple") {
      value = "500";
    }

    return value;
  };
  const clearCart = () => {
    setCart([]);
  };

  let data = {
    cart: cart,
    addToCart,
    clearCart,
    deleteProductById,
    getQuantityById,
    getTotalItems,
    getTotalPrice,
    changeSelect,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
