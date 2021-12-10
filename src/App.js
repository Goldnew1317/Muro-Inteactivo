import logo from './logo.svg';
import {useState, useEffect} from 'react';
import {db} from "./firebase-config";
import './App.css';
import Home from './Home'

function App() {
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
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
      </header>
    </div>
  );
}

export default App;
