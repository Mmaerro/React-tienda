import { CartContext } from "../../context/CartContext";
import "./cart.css";
import FormCheckOut from "../FormCheckOut/FormCheckOut";
import NoData from "../../assets/img/undraw.svg";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineReadMore } from "react-icons/md";
import { GiFrenchFries, GiSaltShaker } from "react-icons/gi";

import Swal from "sweetalert2";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Selectt from "@mui/material/Select";
import LunchDiningRoundedIcon from "@mui/icons-material/LunchDiningRounded";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StorageIcon from "@mui/icons-material/Storage";
import FinishBuy from "../FinishBuy/FinishBuy";

const Cart = () => {
  const {
    cart,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalItems,
    changeSelect,
  } = useContext(CartContext);

  const [buy, setBuy] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const style = {
    fontSize: "15px",
    margin: "3px 0 0 2px",
  };

  const clearCartAlert = () => {
    Swal.fire({
      title: "Seguro quieres eliminar todos los productos del carrito?",
      showDenyButton: true,
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

  const handleChange = (value, id, tipo) => {
    changeSelect(value, id, tipo);
  };
  const total = getTotalPrice();

  if (orderId) {
    return <FinishBuy orderId={orderId} />;
  }
  return (
    <div>
      {!buy ? (
        <>
          {cart.length < 1 ? (
            <div className="noProducts">
              <h4 className="titleProducts">
                Sin Productos Agregados Al Carrito
              </h4>
              <img src={NoData} alt="NoProducts" />
            </div>
          ) : (
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
                    <div key={item.key} className="cards cartCard">
                      <figure className="imgcard cartImg">
                        <img src={item.img} alt={`${item.title}`} />
                        <Link to={`/item/${item.id}`}>
                          <p className="VerMas">
                            Ver Mas <MdOutlineReadMore style={style} />
                          </p>
                        </Link>
                        <div>
                          <figcaption>{item.title}</figcaption>
                          {item.category === "hambur" ||
                          item.category === "veggie" ? (
                            <ul className="ul">
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
                                    <InputLabel
                                      sx={{ color: "#fff" }}
                                      id="demo-simple-select-standard-label"
                                    >
                                      Carnes
                                    </InputLabel>
                                    <Selectt
                                      labelId="demo-simple-select-standard-label"
                                      id="demo-simple-select-standard"
                                      value={item.necar}
                                      label="Carnes"
                                      onChange={(e) =>
                                        handleChange(
                                          e.target.value,
                                          item.key,
                                          "necar"
                                        )
                                      }
                                    >
                                      <MenuItem value="simple">Simple</MenuItem>
                                      <MenuItem value="doble">Doble</MenuItem>
                                      <MenuItem value="triple">Triple</MenuItem>
                                    </Selectt>
                                  </FormControl>
                                ) : (
                                  <FormControl
                                    className="firstSelect"
                                    sx={{
                                      m: 1,
                                      minWidth: 120,
                                    }}
                                  >
                                    <InputLabel
                                      sx={{ color: "#fff" }}
                                      id="demo-simple-select-standard-label"
                                    >
                                      Carnes
                                    </InputLabel>
                                    <Selectt
                                      labelId="demo-simple-select-standard-label"
                                      id="demo-simple-select-standard"
                                      value={item.necar}
                                      label="Carnes"
                                      onChange={(e) =>
                                        handleChange(
                                          e.target.value,
                                          item.key,
                                          "necar"
                                        )
                                      }
                                    >
                                      <MenuItem value="simple">Simple</MenuItem>
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
                                  sx={{
                                    m: 1,
                                    minWidth: 120,
                                    margin: "20px 0 0 10px",
                                  }}
                                >
                                  <InputLabel
                                    sx={{ color: "#fff" }}
                                    id="demo-simple-select-standard-label"
                                  >
                                    Guarnicion
                                  </InputLabel>
                                  <Selectt
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={item.guarnicion}
                                    label="Guarnicion"
                                    onChange={(e) =>
                                      handleChange(
                                        e.target.value,
                                        item.key,
                                        "guarni"
                                      )
                                    }
                                  >
                                    <MenuItem value="sin guarnicion">
                                      Sin guarnicion
                                    </MenuItem>
                                    <MenuItem value="fritas">Fritas</MenuItem>
                                    <MenuItem value="aros">Aros</MenuItem>
                                    <MenuItem value="boniatos">
                                      Boniatos
                                    </MenuItem>
                                    <MenuItem value="rusticas">
                                      Rusticas
                                    </MenuItem>
                                  </Selectt>
                                </FormControl>
                              </li>
                            </ul>
                          ) : (
                            <ul className="ul">
                              <li>{item.description}</li>
                            </ul>
                          )}
                        </div>
                        <div
                          style={{
                            color: "#fff",
                            position: "absolute",
                            bottom: "15px",
                            left: "55%",
                          }}
                        >
                          <p style={{ position: "relative" }}>
                            Precio
                            <MonetizationOnIcon
                              sx={{
                                fontSize: "20px",
                                paddingTop: "15px",
                                right: "10px",
                                position: "absolute",
                                bottom: "0px",
                              }}
                            />
                            <b> $ {item.price}</b>
                          </p>
                          <Button
                            style={{
                              background: "rgba(116, 116, 116, 0.501)",
                              fontSize: "12px",
                              padding: "5px",
                              color: "#fff",
                            }}
                            onClick={() => deleteProductById(item.key)}
                            variant="outlined"
                            startIcon={
                              <DeleteIcon style={{ color: "#f2f2f2" }} />
                            }
                          >
                            Quitar del Pedido
                          </Button>
                        </div>

                        <div className="precio">
                          <p style={{ position: "relative" }}>
                            Guarnicion
                            <GiFrenchFries
                              style={{
                                fontSize: "20px",
                                paddingTop: "15px",
                                right: "20px",
                                position: "absolute",
                                color: "#fff",
                              }}
                            />
                            <b>{item.guarnicion}</b>
                          </p>
                          <p style={{ position: "relative" }}>
                            Tamaño
                            <LunchDiningRoundedIcon
                              sx={{
                                fontSize: "20px",
                                paddingTop: "15px",
                                right: "20px",
                                position: "absolute",
                              }}
                            />
                            <b>{item.necar}</b>
                          </p>
                          <p style={{ position: "relative" }}>
                            Cantidad
                            <StorageIcon
                              sx={{
                                fontSize: "20px",
                                paddingTop: "15px",
                                right: "20px",
                                position: "absolute",
                              }}
                            />
                            <b>{item.quantity}</b>
                          </p>
                          <p style={{ position: "relative" }}>
                            salsas:
                            <GiSaltShaker
                              style={{
                                fontSize: "20px",
                                paddingTop: "15px",
                                right: "20px",
                                position: "absolute",
                              }}
                            />
                            {item.salsas.map((title) => (
                              <b style={{ fontSize: "12px" }} key={title.title}>
                                {title.title}
                              </b>
                            ))}
                          </p>
                        </div>
                      </figure>
                    </div>
                  );
                })}
              </div>
              <div className="cartInfo">
                <div>
                  <div>
                    <b>{getTotalItems()}</b> Productos agrgados al carrito
                    <dl>
                      <dt> Productos: </dt>
                      {cart.map((item) => (
                        <dd key={item.key}>
                          <b>
                            {item.quantity} {item.title}
                          </b>
                          - {item.necar} - {item.guarnicion} /
                          <b> ${item.price * item.quantity}</b>
                        </dd>
                      ))}
                    </dl>
                  </div>
                  <h3>
                    Precio Final:<b> ${getTotalPrice()}</b>
                  </h3>
                  <Button
                    onClick={() => setBuy(true)}
                    variant="contained"
                    endIcon={<SendIcon />}
                    style={{
                      background: "rgba(116, 116, 116, 0.501)",
                      fontSize: "12px",
                      padding: "5px",
                      margin: "10px",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                  >
                    Realizar compra
                  </Button>
                  <Button
                    style={{
                      background: "rgba(116, 116, 116, 0.501)",
                      fontSize: "12px",
                      padding: "5px",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                    onClick={() => clearCartAlert()}
                    variant="contained"
                    startIcon={<DeleteIcon style={{ color: "#f2f2f2" }} />}
                  >
                    Limpiar el carrito
                  </Button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <FormCheckOut
          setOrderId={setOrderId}
          cart={cart}
          total={total}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
