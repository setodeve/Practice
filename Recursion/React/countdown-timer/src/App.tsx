import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

type Props = {
  times:number
}

//時間を受け取り表示する
function Timer(props:Props){
  const hour = Math.floor(props.times/60/60)
  const minitue = Math.floor(props.times/60%60)
  const second = Math.floor(props.times%60)  
  return (
    <div>
      <h1>{String(hour)+" : "+String(( '00' + minitue ).slice( -2 ))+" : "+String(( '00' + second ).slice( -2 ))}</h1>
    </div>
  );
}


export default function App() {
  const [times, setTimes] = useState(0);
  const [retimes, setRetimes] = useState(0);
  const [flg, setFlg] = useState(false);
  const [hour, setHour] = useState(0);
  const [minitue, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const startTimer = () => {
    setTimes((hour*60*60)+(minitue*60)+second) ;
    if(retimes===0) setRetimes((hour*60*60)+(minitue*60)+second) ;
    setHour(Math.floor(times/60/60))
    setMinute(Math.floor(times/60%60))
    setSecond(Math.floor(times%60))
    setFlg(!flg);
  }

  const stopTimer = () => {
    setTimes((hour*60*60)+(minitue*60)+second) ;
    setHour(Math.floor(times/60/60))
    setMinute(Math.floor(times/60%60))
    setSecond(Math.floor(times%60))
    setFlg(false);
  }

  const restartTimer = () => {
    setTimes(retimes) 
  }

  const resetTimer = () => {
    setTimes(0) ;
    setRetimes(0);
    setHour(0)
    setMinute(0)
    setSecond(0)
    setFlg(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(flg && times!==0){
        setTimes(times => times - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [times, flg]);

  return (
    <div className="App">
      <h1>CountDownTimer</h1>
      <div>
      <div>
        <label>
          Hours : 
          <input 
            type="text" 
            value={hour} 
            onChange={e => setHour(Number(e.target.value))}
          />
        </label>
        <label>
          Minitues : 
          <input 
              type="text" 
              value={minitue} 
              onChange={e => setMinute(Number(e.target.value))}
          />
        </label>
        <label>
          Seconds : 
          <input 
              type="text" 
              value={second} 
              onChange={e => setSecond(Number(e.target.value))}
          />
        </label>
      </div>
      </div>
      <button onClick={startTimer} disabled={flg}>
        開始
      </button>
      <button onClick={stopTimer} disabled={!flg}>
        停止
      </button>
      <Timer times={times}/>
      <button onClick={restartTimer} disabled={!flg}>
        再スタート
      </button>
      <button onClick={resetTimer} >
        リセット
      </button>
      {retimes}
    </div>
  );
}

