import React, {useRef} from 'react';
import {db} from "./firebase-config";
import './User';

function New_user({add_NewUser}){
    const nombreRef = useRef(null);
    const apellidoRef = useRef(null);
    const usuarioRef = useRef(null);
    const claveRef = useRef(null);

    const add_user = ()=>{
        if (nombreRef.current.value == ""){
            alert("El nombre no puede estar en blanco")
            } else {
                if (apellidoRef.current.value == ""){
                    alert("El apellido no puede estar en blanco") 
                } else {
                    if (usuarioRef.current.value == ""){
                    alert("El usuario no puede estar en blanco")
                    } else {
                        if (claveRef.current.value == ""){
                        alert("la clave no puede estar en blanco")
                        } else {
                            const user = {
                                nombre: nombreRef.current.value,
                                apellido: apellidoRef.current.value,
                                usuario: usuarioRef.current.value,
                                clave: claveRef.current.value,
                            }
                    
                            db.collection('Usuarios')
                            .add(user);
                            
                            alert("El usuario ha sido registrado")
                            nombreRef.current.value = "";
                            apellidoRef.current.value = "";
                            usuarioRef.current.value = "";
                            claveRef.current.value = "";
                            add_NewUser(user);
                        }
                    }
                }
            }
        }


    return (
        <div className="contenedor">
            <h2 className="columna">
                Registro:
            </h2>
            <div className="columna">
                Nombre:
                <input type="text" ref={nombreRef} className="texto" />
            </div>

            <div className="columna">
                Apellido:
                <input type="text" ref={apellidoRef} className="texto" />
            </div>

            <div className="columna">
                Usuario:
                <input type="text" ref={usuarioRef} className="texto" />
            </div>

            <div className="columna">
                Clave:
                <input type="password" ref={claveRef} className="texto" />
            </div>

            <div className="fila">
                <div className="columna">
                    <button className="boton" onClick={add_user}>Registrarse</button>
                </div>
            </div>
        </div>
    );
}

export default New_user;