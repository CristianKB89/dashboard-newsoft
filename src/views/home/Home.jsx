import React from "react";
import { useContext } from "react";
import { ContextApp } from "../../context/ContextApp";
import "./Home.scss";

function Home() {
  const { products } = useContext(ContextApp);
  const { users } = useContext(ContextApp);
  console.log(users);
  return (
    <div>
      <h1>Total de productos en base de datos: {products.length}!</h1>
    </div>
  );
}

export default Home;
