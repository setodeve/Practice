import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

type Props = {
  seconds:number,
}

//秒数を時間/分数/秒数の三つで表示する
function TimeDivide(time : number){
  const hour = Math.floor(time/60/60);
  const minitue = Math.floor(time/60);
  const seconds = Math.floor(time%60);
  // console.log(hour)
  // console.log(minitue)
  // console.log(seconds)
  return String(( '00' + hour ).slice( -2 ))+" : "+String(( '00' + minitue ).slice( -2 ))+" : "+String(( '00' + seconds ).slice( -2 ))
}

//時間を受け取り表示する
function Timer(props:Props){
  return (
    <div>
      <h1>{TimeDivide(props.seconds)}</h1>
    </div>
  );
}

//Timerに時間を渡しを表示する
export default function App() {
  const [seconds, setSeconds] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function secondDecrease() {
    setSeconds(seconds-1);
  }

  return (
    <div className="App">
      <h1>CountDownTimer</h1>
      <button onClick={secondDecrease}>
        開始
      </button>
      <Timer seconds={seconds}/>
    </div>
  );
}

