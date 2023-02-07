import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Category from './category';
import reportWebVitals from './reportWebVitals';
import phone from './phone.jpg';
import laptop from './Laptop.jpg';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1>Category List</h1>
    <Category data={{image:phone,name:"Phone"}}/>
    <Category data={{image:laptop,name:"Laptop"}}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();