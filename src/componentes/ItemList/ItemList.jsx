import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <section>
      {items.map((element) => {
        return <ProductCard element={element} key={element.id} />;
      })}
    </section>
  );
};

export default ItemList;
