import { CartContext } from "../../context/CartContext";
import "./cart.css";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineReadMore } from "react-icons/md";
import Swal from "sweetalert2";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Selectt from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice, getTotalItems } =
    useContext(CartContext);

  const style = {
    fontSize: "15px",
    margin: "3px 0 0 2px",
  };

  const clearCartAlert = () => {
    Swal.fire({
      title: "Seguro quieres eliminar todos los productos del carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Se elimino el carrito!", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("El carrito no se a eliminado", "", "error");
      }
    });
  };

  const [guarni, setGuarni] = useState("");
  const [meat, setMeat] = useState("");
  console.log(meat);
  console.log(guarni);
  const handleChange = (event) => {
    setMeat(event.target.value);
  };
  const handleChangeTwo = (event) => {
    setGuarni(event.target.value);
  };

  return (
    <div className="cartContent">
      <h2
        className="titleProducts"
        style={{ marginTop: "0px ", textAlign: "center" }}
      >
        Carrito de compras
      </h2>
      <div className="carritos">
        {cart.map((item) => {
          return (
            <div key={item.id} className="cards cartCard">
              <figure className="imgcard cartImg">
                <img src={item.img} alt={`${item.title}`} />
                <Link to={`/item/${item.id}`}>
                  <p className="VerMas">
                    Ver Mas <MdOutlineReadMore style={style} />
                  </p>
                </Link>
                <div>
                  <figcaption>{item.title}</figcaption>
                  {item.category === "hambur" || item.category === "veggie" ? (
                    <ul>
                      <li>{item.description}</li>
                      <li
                        style={{
                          position: "absolute",
                          bottom: "50px",
                          left: "10px",
                        }}
                      >
                        {item.category === "hambur" &&
                        item.title !== "Pollo Crispy" ? (
                          <FormControl
                            className="firstSelect"
                            sx={{ m: 1, minWidth: 120 }}
                          >
                            <InputLabel id="demo-simple-select-helper-label">
                              Carnes
                            </InputLabel>
                            <Selectt
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={meat}
                              label="Carnes"
                              onChange={handleChange}
                            >
                              <MenuItem value="">
                                <em></em>
                              </MenuItem>
                              <MenuItem value={10}>Simple</MenuItem>
                              <MenuItem value={20}>Doble</MenuItem>
                              <MenuItem value={30}>Triple</MenuItem>
                            </Selectt>
                          </FormControl>
                        ) : (
                          <FormControl
                            className="firstSelect"
                            sx={{ m: 1, minWidth: 120 }}
                          >
                            <InputLabel id="demo-simple-select-helper-label">
                              Carnes
                            </InputLabel>
                            <Selectt
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={meat}
                              label="Carnes"
                              onChange={handleChange}
                            >
                              <MenuItem value="">
                                <em></em>
                              </MenuItem>
                              <MenuItem value={101}>Simple</MenuItem>
                            </Selectt>
                          </FormControl>
                        )}
                      </li>
                      <li
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "10px",
                        }}
                      >
                        <FormControl
                          className="firstSelect"
                          sx={{ m: 1, minWidth: 120 }}
                        >
                          <InputLabel id="demo-simple-select-helper-label">
                            Guarnicion
                          </InputLabel>
                          <Selectt
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={guarni}
                            label="Guarnicion"
                            onChange={handleChangeTwo}
                          >
                            <MenuItem value="">
                              <em></em>
                            </MenuItem>
                            <MenuItem value="Sin guarnicion">
                              Sin guarnicion
                            </MenuItem>
                            <MenuItem value="Fritas">Fritas</MenuItem>
                            <MenuItem value="Aros">Aros</MenuItem>
                            <MenuItem value="Boniatos">Boniatos</MenuItem>
                            <MenuItem value="Rusticas">Rusticas</MenuItem>
                          </Selectt>
                        </FormControl>
                      </li>
                    </ul>
                  ) : (
                    <ul>
                      <li>{item.description}</li>
                    </ul>
                  )}
                </div>
                {/* <ItemCount 
            stock={element.stock}
            initial={quantity}
            onAdd={onAdd}
            /> */}
                <div className="precio">
                  <p>
                    Guarnicion:{item.sape} <b>{guarni}</b>
                  </p>
                  <p>
                    Cantidad: <b>{item.quantity}</b>
                  </p>
                  <p>
                    Precio por Unidad: <b>{item.price}</b>
                  </p>
                  <Button
                    style={{
                      background: "rgba(116, 116, 116, 0.501)",
                      fontSize: "12px",
                      padding: "5px",
                      color: "#fff",
                    }}
                    onClick={() => deleteProductById(item.id)}
                    variant="outlined"
                    startIcon={<DeleteIcon style={{ color: "#f2f2f2" }} />}
                  >
                    Quitar del Pedido
                  </Button>
                </div>
              </figure>
            </div>
          );
        })}
      </div>
      <div className="cartInfo">
        <div>
          <p>El total de productos es de {getTotalItems()}</p>
          <h3>Precio Final: ${getTotalPrice()}</h3>
          <button onClick={() => clearCartAlert()}>Limpiar el carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
