import React from 'react';
import { useState } from 'react';
import './App.css';
import dog from './dog.jpg';
import bird from './bird.jpg';

export default function App() {
  return (
    <div className="App">
      App
    </div>
  );
}

export function Form() {
  const [name, setName] = useState('') ;
  const [id, setId] = useState('') ;
  const [textarea, setText] = useState('') ;
  const [image, setImage] = useState(dog) ;

  return (
    <div className='App'>
        <label>
        name:
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        id:
        <input
          value={id}
          onChange={e => setId(e.target.value)}
        />
      </label>
      <label>
        textarea:
        <input
          value={textarea}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <label >
        image:
        <select value={image} onChange={e => setImage(e.target.value)}>
          <option value={dog}>dog</option>
          <option value={bird}>bird</option>
        </select>
      </label>
      {name !== '' &&
        <p>{name}</p>
      }
      {id !== '' &&
        <p>{id}</p>
      }
      {textarea !== '' &&
        <p>{textarea}</p>
      }
      {
        <img src={image} alt="test" />
      }
    </div>
  );
}