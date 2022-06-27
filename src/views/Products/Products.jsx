import React from "react";
import { useContext } from "react";
import { ContextApp } from "../../context/ContextApp";
import "./Products.scss";
import { Link } from "react-router-dom";

function Products() {
  const { products } = useContext(ContextApp);
  return (
    <section className="Products-wrapper">
      <h1>Catálogo de productos</h1>
      <div>
        {products?.map((product, key = product.id_products) => {
          return (
            <article className="Product-card" key={key}>
              <img src={product.imageUrl} alt="" />
              <div className="Product-name">
                <h2>{product.name}</h2>
                <p> Precio: ${product.price} </p>
                <h2>Categoría:{product.categories?.categories}</h2>
              </div>
            </article>
          );
        })}
        <Link to="/"></Link>
      </div>
    </section>
  );
}

export default Products;
