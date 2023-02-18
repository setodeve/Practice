import React from 'react';
import './App.css';

type Props = {
  hours:Number,
  minitues:Number,
  seconds:Number,
}

//時間を受け取りカウントする
function Timer(props:Props){
  return (
    <div>Timer Component</div>
  );
}

//Timerに時間を渡しを表示する
export default function App() {
  <Timer hours={1} minitues={20} seconds={30}/>
  return (
    <div className="App">
      <h1>CountDownTimer</h1>
    </div>
  );
}

