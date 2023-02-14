import ItemDetail from "../itemDetail/ItemDetail";

import { products } from "../../productsMock";

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(()=>{
        let productSelected = products.find(prod => prod.id === Number(id) )
        setProduct(productSelected)
    }, [])
  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer