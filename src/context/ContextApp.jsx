import React, { createContext, useEffect, useState } from "react";

export const ContextApp = createContext([]);
export const ContextAppProvider = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  async function fetchProducts() {
    const res = await fetch("http://localhost:3030/api/products/list", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setProducts(data);
  }

  async function fetchUsers() {
    const res = await fetch("http://localhost:3030/api/users/list", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchProducts();
    fetchUsers();
  }, [apiCall]);

  return (
    <ContextApp.Provider value={{ products, users , apiCall, setApiCall }}>
      {props.children}
    </ContextApp.Provider>
  );
};
