import React, { createContext, useEffect, useState } from "react";

export const ContextApp = createContext([]);
export const ContextAppProvider = (props) => {
  const [apiCall, setApiCall] = useState(false)
  const [products, setProducts] = useState([]);
 

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

//   function fetchUsers() {
//     fetch("http://localhost:3030/api/users", {
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => console.log(err));
//   }
  
  useEffect(() => {
    fetchProducts();
  }, [apiCall]);

  return (
    <ContextApp.Provider value={{ products, apiCall, setApiCall }}>
      {props.children}
    </ContextApp.Provider>
  );
};
