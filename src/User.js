import React from 'react';

function User({nombre, apellido, usuario, clave}){
    return(
        <div className="contenedor">
            <div className="fila">
                <div className="columna">
                    Nombre:
                </div>
                <div className="columna">
                    {nombre}
                </div>
            </div>

            <div className="fila">
                <div className="columna">
                    Apellido:
                </div>
                <div className="columna">
                    {apellido}
                </div>
            </div>

            <div className="fila">
                <div className="columna">
                    Usuario:
                </div>
                <div className="columna">
                    {usuario}
                </div>
            </div>

            <div className="fila">
                <div className="columna">
                    Clave:
                </div>
                <div className="columna">
                    {clave}
                </div>
            </div>

        </div>
    );
}

export default User;