import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { products } from "../../productsMock";
import GuarniMeat from "../Guarniciones/Meat";
import GuarniVeggie from "../Guarniciones/Veggie";

import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";

import { DotLoader } from "react-spinners";

//importar la DB
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const styles = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const { id } = useParams();

  const [items, setItems] = useState([]);
  const [guarni, setGuarni] = useState("");

  useEffect(() => {
    const productsFiltered = products.filter(
      (product) => product.category === id
    );

    const itemCollection = collection(db, "products");
    if (id) {
      const q = query(itemCollection, where("category", "==", id));
      getDocs(q)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            };
          });
          setItems(products);
        })
        .catch((err) => console.log(err));
    } else {
      getDocs(itemCollection)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            };
          });
          setItems(products);
        })
        .catch((err) => console.log(err));
    }

    const categoryMeat = productsFiltered.filter(
      (element) => element.category === "hambur"
    );
    const categoryVeggie = productsFiltered.filter(
      (element) => element.category === "veggie"
    );
    if (categoryMeat.length >= 1) {
      setGuarni("meat");
    } else if (categoryVeggie.length >= 1) {
      setGuarni("veg");
    } else {
      setGuarni("");
    }
  }, [id]);

  return (
    <div className="menu">
      <div className="contlogo">
        <span></span>
        <img
          className="logo"
          src="https://res.cloudinary.com/dcm170r29/image/upload/v1675871336/logo_vrnkr8.gif"
          alt=""
        />
        <span></span>
      </div>
      {guarni === "meat" ? (
        <h3 className="titleProducts">Hamburguesas de carne</h3>
      ) : guarni === "veg" ? (
        <h3 className="titleProducts">Hamburguesas Vegetarianas</h3>
      ) : (
        <h3 className="titleProducts">Todos los productos</h3>
      )}
      {items.length < 1 ? (
        <DotLoader
          color={"red"}
          cssOverride={styles}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <ItemList items={items} />
          {guarni === "meat" ? (
            <GuarniMeat />
          ) : guarni === "veg" ? (
            <GuarniVeggie />
          ) : undefined}
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
