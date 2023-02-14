import React from 'react';
import './App.css';

type Props = {
  num: string
}

function NumberSort(num:string){
  // For Hex
  if(num.substring(0,2)==="0x") return parseInt(num,16);
  //For Bin
  else if(num.substring(num.length-1)==="b") return parseInt(num,2);
  //For the Others
  else return num
}

function HundredJudge(props:Props){
  const analyzedData = NumberSort(props.num) ;
  const str = (Number(analyzedData)>=100) ? "Above" : "Below" ;
  return (
    <div>
      {props.num} is {str} 100
    </div>
  );
}

export default function App() {
  return (
    <div>
      <HundredJudge num={"10"}/>
      <HundredJudge num={"120"}/>
      <HundredJudge num={"0xab"}/>
      <HundredJudge num={"100b"}/>
    </div>
  );
}

