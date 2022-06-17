import React from "react";
import { useContext } from "react";
import { ContextApp } from "../../context/ContextApp";


function Productos() {
    const { products } = useContext(ContextApp);

    return (
        <React.Fragment>
            <h1>Total de productos en base de datos: {products.length}!</h1>

            <div>
                <h3>Ultimo producto en la base de datos:</h3>
                id: {products[products.length - 1].id_products}
                Nombre: {products[products.length - 1].name}
                Precio: {products[products.length - 1].price}
                Descripcion: {products[products.length - 1].description}
                Accesorios: {products[products.length - 1].accesories}
            </div>


            {/* Tabla de todos los productos */}
            <div>
                <h3>Tabla de todos los productos:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Descripcion</th>
                            <th>Accesorios</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id_products}>
                                <td>{product.id_products}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.accesories}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Todos los produtos */}
            <div>
                <h3>Todos los productos:</h3>
                {products.map((product) => (
                    <div key={product.id_products}>
                        <h4>id: {product.id_products}</h4>
                        <h4>Nombre: {product.name}</h4>
                        <h4>Precio: {product.price}</h4>
                        <h4>Descripcion: {product.description}</h4>
                        <h4>Accesorios: {product.accesories}</h4>
                    </div>
                ))}
            </div>
            
        </React.Fragment>

    );
}

export default Productos;