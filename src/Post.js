import React from 'react';

function Post({autor, publicacion}){
    return(
        <table>
            <td>
                {autor}:
            </td>
            <td>
                {publicacion}
            </td>
            <p> </p>
        </table>
    );
}

export default Post;