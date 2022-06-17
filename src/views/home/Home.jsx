import React from 'react'
import { useContext } from 'react'
import { ContextApp } from '../../context/ContextApp'
import "./Home.scss";

function Home() {
    const { products } = useContext(ContextApp);
    console.log(products);
  return (
    // <div>{products?.data.length}</div>
    <h1>Total de productos en base de datos: {products.length}!</h1>
  )
}

export default Home