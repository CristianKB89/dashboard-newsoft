import React from "react";
import { useContext } from "react";
import { ContextApp } from "../../context/ContextApp";
import "./Home.scss";

import Usuarios from './Usuarios';
import Productos from './Productos';

function Home() {
  const { products } = useContext(ContextApp);
  const { users } = useContext(ContextApp);

  return (

    <React.Fragment>


      <Usuarios/>

      <Productos/>



    </React.Fragment>
  );
}

export default Home;
