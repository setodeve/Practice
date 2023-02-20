import React from 'react';
import './App.css';
import { useState } from 'react';

type Props = {
  name:string,
  num:number,
  table:number,
  status:string
}

function Inside(props:Props){
  return(
    <div>
      <h3>店内</h3>
    </div>
  );
}

function Wait(props:Props){
  return(
    <div>
      <h3>順番待ち</h3>
    </div>
  );
}

function Form(){
  const [formInput,setformInput] = useState({name:"",num:0,table:0,status:""})
  return(
    <div>
      <label>
        <input type="text" />
      </label>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>WatingBoard</h1>
    </div>
  );
}

