import React from "react";
import { useContext } from "react";
import { ContextApp } from "../../context/ContextApp";


function Usuarios() {
    const { users } = useContext(ContextApp);

    return (

        <React.Fragment>

            <h1>Total de usuarios en base de datos: {users.length}!</h1>

            <div>
                <h3>Ultimo usuario en la base de datos:
                    id: {users[users.length - 1].id_users}
                    Nombre: {users[users.length - 1].name}
                    Apellido: {users[users.length - 1].lastname}
                    Email: {users[users.length - 1].email}
                </h3>
            </div>

            <div>
                <h3>Tabla de todos los usuarios:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (
                            <tr>
                                <th key={user.id_users + i}>{user.id_users}</th>
                                <td key={user.name + i}>{user.name}</td>
                                <td key={user.lastname + i}>{user.lastname}</td>
                                <td key={user.email + i}>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>

    );
}

export default Usuarios;