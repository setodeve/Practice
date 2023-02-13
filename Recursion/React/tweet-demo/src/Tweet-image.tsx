import React from 'react';
import './App.css'

type Props ={
  name: string,
  id: string,
  image: string,
  textarea: string
}

export default function Image(props:Props){
  return (
    <div className='Tweet-image'>
      <div><img className='App-logo left' src={props.image} alt="test" /></div>
      <div className='left'>{props.name}</div>
      <div className='left'>{props.id}</div>
      <div className='left'>{props.textarea}</div>
    </div>
  );
}