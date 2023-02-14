import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { products } from "../../productsMock";
import  GuarniMeat  from "../Guarniciones/guarniMeat";
import  GuarniVeggie  from "../Guarniciones/guarnVeggie";

import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";
const ItemListContainer = () => {
  
  const { id } = useParams();

  const [items, setItems] = useState([]),
        [guarni, setGuarni] = useState("");
  

  useEffect(() => {
    const productsFiltered = products.filter(
      (product) => product.category === id
    );
  
    const task = new Promise((resolve, reject) => {
      resolve(id ? productsFiltered : products);
      // reject(errorMessage);
    });

    task
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log("aca se rechazo: ", error);
      });

      const produFilter = products.filter((product) => product.category === id )
      const categoryMeat = produFilter.filter((element) => element.category === 'hambur')
      const categoryVeggie = produFilter.filter((element) => element.category === 'veggie')
        if(categoryMeat.length >= 1){

          setGuarni('meat')

        }else if(categoryVeggie.length >= 1){

          setGuarni('veg')

        }else {
          setGuarni('')
        }
  }, [id]);

  return (
    <div className="menu">
     <div className="contlogo">
            <span></span>
            <img className="logo" src="https://res.cloudinary.com/dcm170r29/image/upload/v1675871336/logo_vrnkr8.gif" alt="" />
            <span></span>
        </div>
        {guarni === 'meat' ? <h3 className="titleProducts">Hamburguesas de carne</h3> : guarni === 'veg' ? <h3 className="titleProducts">Hamburguesas Vegetarianas</h3>  : <h3 className="titleProducts">Todos los productos</h3>  }
      <ItemList items={items} />
     {guarni === 'meat' ? <GuarniMeat /> : guarni === 'veg' ? <GuarniVeggie /> : undefined }
    </div>
  );
};

export default ItemListContainer;
