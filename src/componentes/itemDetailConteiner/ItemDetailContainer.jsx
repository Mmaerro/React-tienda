import ItemDetail from "../itemDetail/ItemDetail";
import { CartContext } from "../../context/CartContext";

import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { DotLoader } from "react-spinners";

import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [alert, setAlert] = useState("");
  const [meat, setMeat] = useState("");
  const [guarnis, setGuarnis] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);
    getDoc(ref)
      .then((res) => {
        setProduct({
          ...res.data(),
          id: res.id,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const styles = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const addMeat = (value) => {
    setMeat(value);
  };
  const addGuarni = (value) => {
    setGuarnis(value);
  };
  const getSalsa = (e) => {
    setData(e);
  };

  useEffect(() => {}, [data]);
  const onAdd = (cantidad) => {
    if (meat !== "" && guarnis !== "") {
      const obj = {
        ...product,
        quantity: cantidad,
        necar: meat,
        guarnicion: guarnis,
        salsas: data,
      };
      addToCart(obj);
      setAlert("hecho");
      setData([]);
      setTimeout(() => {
        setAlert("");
      }, 2000);
    } else {
      setAlert("false");
      setTimeout(() => {
        setAlert("");
      }, 2000);
    }
  };
  const quantity = getQuantityById(product.id);

  return (
    <>
      {product.length <= 1 ? (
        <DotLoader
          color={"red"}
          cssOverride={styles}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <ItemDetail
          product={product}
          quantity={quantity}
          onAdd={onAdd}
          addMeat={addMeat}
          addGuarni={addGuarni}
          alert={alert}
          getSalsa={getSalsa}
        />
      )}
    </>
  );
};

export default ItemDetailContainer;
