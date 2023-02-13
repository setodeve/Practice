import React from 'react';
import './App.css';

type Props = {
  num: string
}

function HexAnalyze(num:string){
  console.log("16dayo"+num)
}

function BinAnalyze(num:string){
  console.log("2dayo"+num);
}

function NumberSort(num:string){
  // For Hex
  if(num.substring(0,2)==="0x"){ 
    return HexAnalyze(num.substring(2,num.length));
  // For Bin
  }else if(num.substring(num.length-1)==="b"){
    return BinAnalyze(num.substring(0,num.length-1))
  // For the Others
  }else{
    return num;
  }
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
      {/* <HundredJudge num={"10"}/>
      <HundredJudge num={"120"}/> */}
      {/* <HundredJudge num={"0xAB"}/> */}
      <HundredJudge num={"100b"}/>
    </div>
  );
}

