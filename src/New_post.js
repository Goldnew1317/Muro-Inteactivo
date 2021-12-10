import React, {useRef} from 'react';
import {db} from "./firebase-config";
import './User';

function New_post({add_NewPost}){
    const autorRef = useRef(null);
    const publicacionRef = useRef(null);

    const add_post = ()=>{
        if (autorRef.current.value == ""){
            alert("La publicacion debe tener autor")
            } else {
                if (publicacionRef.current.value == ""){
                    alert("Tienes que publicar algo")
                } else {
                    const post = {
                        autor: autorRef.current.value,
                        publicacion: publicacionRef.current.value,
                    }
            
                    db.collection('Publicaciones')
                    .add(post);
            
                    autorRef.current.value = "";
                    publicacionRef.current.value = "";
                    add_NewPost(post);
                }
            }
    }

    return (
        <div className="contenedor">
            <h2 className="columna">
                Publicar:
            </h2>
            <div className="fila">
                <div className="columna">
                    Nombre del author:
                    <input type="text" ref={autorRef} className="texto" />                    
                </div>
            </div>

            <div className="fila">
                <div className="columna">
                    Publicacion:
                    <input type="text" ref={publicacionRef} className="texto" />
                </div>
            </div>

            <div className="fila">
                <div className="columna">
                    <button className="boton" onClick={add_post}> Agregar publicacion </button>
                </div>
            </div>
            <p></p>
            <h3> Publicaciones: </h3>
        </div>
    );
}

export default New_post;