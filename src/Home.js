import React from 'react';
import {useState, useEffect} from 'react';
import Post from './Post';
import New_post from './New_post';
import New_User from './New_user';
import {db} from "./firebase-config";

function Home(){
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
  
    const add_NewUser = (user)=>{
      const tmpUsers = users.slice();
      tmpUsers.push(user);
      setUsers(tmpUsers);
    }
  
    const add_NewPost = (post)=>{
      const tmpPosts = posts.slice();
      tmpPosts.push(post);
      setPosts(tmpPosts);
    }
  
    useEffect(()=>{
      const list = [];
  
      db.collection('Usuarios')
      .get()
      .then( resultado => {
        resultado.forEach( user=>{
          list.push(user.data());
        })
        setUsers(list);
      }).catch( error=>console.log(error));
    }, []);
  
    useEffect(()=>{
      const listPost = [];
  
      db.collection('Publicaciones')
      .get()
      .then( resultado => {
        resultado.forEach( post=>{
          listPost.push(post.data());
        })
        setPosts(listPost);
      }).catch( error=>console.log(error));
    }, []);

    return (
        <div className="App">
          <header className="App-header">
            <div><New_User add_NewUser={add_NewUser} /></div>
            <div><New_post add_NewPost={add_NewPost} /></div>
            {
              posts && posts.slice().reverse().map((post, j)=>{
                const {autor, publicacion} = post;
                return (<Post key={j} autor={autor} publicacion={publicacion} />) 
            })
            }
    
          </header>
        </div>
      );
}
export default Home;