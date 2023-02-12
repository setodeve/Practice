import React from 'react';
import { useState } from 'react';
import './App.css';
import dog from './dog.jpg';
import bird from './bird.jpg';
import Image from './Tweet-image'


export default function Form() {
  const [name, setName] = useState('name') ;
  const [id, setId] = useState('id') ;
  const [textarea, setText] = useState('text') ;
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
      <Image name={name} id={id} image={image} textarea={textarea}/>
    </div>
  );
}