import React from "react";
import { useContext } from "react";
import { ContextApp } from "../../context/ContextApp";
import "./Home.scss";
import MouseIcon from "@mui/icons-material/Mouse";
import PersonIcon from "@mui/icons-material/Person";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
//import { Link } from "react-router-dom";

function Home() {
  const { products, users, categories, productsCategory } =
    useContext(ContextApp);
  const lastUser = users[users.length - 1];
  const lastProduct = products[products.length - 1];
  let productCategory = productsCategory?.meta?.countByCategory;
  
  return (
    <section className="Data-wrapper">
      <div className="Detail-wrapper">
        <div className="Articles">
          <article>
            <MouseIcon className="icon" />
            <h2>Total Productos:</h2>
            <p className="numberCircle">{products?.length}</p>
          </article>
          <article>
            <PersonIcon className="icon" />
            <h2>Total Usuarios:</h2>
            <p className="numberCircle">{users?.length}</p>
          </article>
          <article>
            <HeadsetMicIcon className="icon" />
            <h2>Total Categorias:</h2>
            <p className="numberCircle">{categories?.length}</p>
          </article>
        </div>
        <div className="ultimo">
          <div className="last">
            <h3>Ultimo usuario registrado:</h3>
            <div className="last-data">
              <img src={lastUser?.imageUrl} alt="" />
              <div className="user-data">
                <p className="name">
                  {lastUser?.name} {lastUser?.lastname}
                </p>
                <p>Email: {lastUser?.email}</p>
                <p>Telefono: {lastUser?.user_phone}</p>
                <p>Fecha de registro: </p>
                <p>{lastUser?.created_at.substring(0, 10)}</p>
              </div>
            </div>
          </div>
          <div className="last">
            <h3>Ultimo producto agregado:</h3>
            <div className="last-data">
              <img src={lastProduct?.imageUrl} alt={lastProduct?.name} />
              <div className="user-data">
                <p className="name">{lastProduct?.name}</p>
                <p>Categoría: {lastProduct?.categories?.categories}</p>
                <p>Precio: ${lastProduct?.price}</p>
                <p>Fecha de creación: </p>
                <p>{lastProduct?.created_at?.substring(0, 10)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="explore-product">
        {productCategory?.map((category, key = category.id) => {
          return (
            <div key={key}>
              <div className="product">
                {category.categories === "Audifonos" && (
                  <img src="img/explore-headsets.png" alt="" />
                )}
                {category.categories === "Audio (Microfonos)" && (
                  <img src="img/explore-micro.png" alt="" />
                )}
                {category.categories === "Camaras" && (
                  <img src="img/explore-camara.png" alt="" />
                )}
                {category.categories === "Cases" && (
                  <img src="img/explore-cases.png" alt="" />
                )}
                {category.categories === "Mouse" && (
                  <img src="img/explore-mouse.png" alt="" />
                )}
                {category.categories === "Teclados" && (
                  <img src="img/explore-keyboards.png" alt="" />
                )}
                <div className="product-name">{category.categories}</div>
                <div className="product-number">Total: {category.count}</div>
              </div>
            </div>
          );
        })}
      </section>
      {/* <Link to="/products">
        <SportsEsportsIcon color="primary" />
      </Link> */}
    </section>
  );
}

export default Home;
