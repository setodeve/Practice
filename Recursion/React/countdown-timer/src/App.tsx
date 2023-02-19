import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

type Props = {
  seconds:number,
}

//秒数を時間/分数/秒数の三つで表示する
function TimeDivide(time : number){
  const hour = Math.floor(time/60/60);
  const minitue = Math.floor(time/60%60);
  const seconds = Math.floor(time%60);
  // console.log(hour)
  // console.log(minitue)
  // console.log(seconds)
  return String(hour)+" : "+String(( '00' + minitue ).slice( -2 ))+" : "+String(( '00' + seconds ).slice( -2 ))
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
  const [seconds, setSeconds] = useState(10000);
  const [flg, setFlg] = useState(false);
  const monitorFlg = () => {
    setFlg(!flg);
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      if(flg){
        setSeconds(seconds => seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [flg]);

  return (
    <div className="App">
      <h1>CountDownTimer</h1>
      <button onClick={monitorFlg}>
        開始
      </button>
      <button onClick={monitorFlg}>
        停止
      </button>
      <h1>{flg}</h1>
      <Timer seconds={seconds}/>
    </div>
  );
}

