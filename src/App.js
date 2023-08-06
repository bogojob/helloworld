//import logo from './logo.svg';
import './App.css';
//import { Home } from './Home';
import { Box } from './Box';
import { FileSystem2 } from './FileSystem2';
import React, { useState, useEffect } from 'react';
import { USERDATA } from "./jsonuser";
import { FileSystemHeader } from './FileSystemHeader';
import { CircleProgress } from './CircleProgress';

function App() {

  const [ResourceType, setResourceType] = useState('posts')
  const [dimension, setDimension] = useState(100)
  const [items, setItems] = useState([])

  const clicked = () => {
    //document.getElementById("btn").style.width = "200px";
    setDimension(Math.floor(Math.random() * ((400 - 100) + 0)));
  }





  useEffect(() => {
    console.log('render');
  })
  return (
    <>
      {/* <button onClick={() => { setResourceType('posts'); }} >POST</button>
      <button onClick={() => { setResourceType('users'); }} >USER</button>
      <button onClick={() => { setResourceType('comments'); setDimension(Math.floor(Math.random() * ((400 - 100) + 0))) }} >COMMENT</button>
      <h1>{ResourceType}</h1>

      <button id="btn" style={{ "width": dimension }}>TEst</button>
      <button onClick={() => { clicked() }} >resize</button>
      <button onClick={() => {  }} >reset </button>

      <button onClick={() => {
                let newItems = [...items, { "id": 200, "name": "paolo" }];
               
                setItems(newItems)
            }} >Add item to ITEMS</button>
            <button onClick={() => {
                const ar = document.querySelectorAll('li[class^="wrapper"]')[0].id;
                const newItems = items.filter(x => String(x.id) !== ar);
                setItems(newItems);
            }} >Remove item to ITEMS</button> */}


      {/* <ul>*/}
      {/* {items.map(item => { return <li key={item.id}>{item.name}</li> })} */}
      {/* </ul>  */}
      {/* {<Box  />} */}



      <CircleProgress />
      <div style={{ "width": "350px", "border": "solid 1px black" }} >

        <div style={{ "display": "flex", "height": "60px", "border": "solid 1px green" }}>
         


        </div>

        {/* <div className='headerfs'>
          <FileSystemHeader />
        </div>
        {<FileSystem2 items={USERDATA.filesystem.nodes} />} */}
      </div>
    </>
  );
}

export default App;



