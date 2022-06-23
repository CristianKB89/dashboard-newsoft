import React, { createContext, useEffect, useState } from "react";

export const ContextApp = createContext([]);
export const ContextAppProvider = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsCategory, setproductsCategory] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

  async function fetchProducts() {
    const res = await fetch("http://localhost:3030/api/dashboard/products", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setProducts(data);
  }

  async function fetchUsers() {
    const res = await fetch("http://localhost:3030/api/dashboard/users", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setUsers(data);
  }

  async function fetchCategories() {
    const res = await fetch("http://localhost:3030/api/dashboard/categories", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setCategories(data);
  }

  async function fetchProductsCategory() {
    const res = await fetch(
      "http://localhost:3030/api/products",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setproductsCategory(data);
  }

  useEffect(() => {
    fetchProducts();
    fetchUsers();
    fetchCategories();
    fetchProductsCategory();
  }, [apiCall]);

  return (
    <ContextApp.Provider
      value={{ products, users, categories, productsCategory ,apiCall, setApiCall }}
    >
      {props.children}
    </ContextApp.Provider>
  );
};
