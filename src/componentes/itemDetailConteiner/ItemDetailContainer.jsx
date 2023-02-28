import ItemDetail from "../itemDetail/ItemDetail";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

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
  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
