import React from 'react';
import './App.css';
import { useState } from 'react';

type Props = {
  id?:number
  name?:string,
  num?:number,
  table?:number,
  status?:string
}



function Form(){
  const [formInput,setformInput] = useState(
    { name:"", num:0, table:0 }
  );
  
  const [lists,setLists] = useState<Props[]>([]);
  const [cnt,setCnt] = useState(0);
  const submitevent = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value} = e.target;
    setformInput({...formInput, [name]:value});
  }
  const tableList = ["テーブル","カウンター","どちらでも可"];
  const pushbutton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(formInput.name==="" || formInput.num===0 ) return ;
    setLists([
    ...lists,
    { 
      id: cnt,
      name: formInput.name,
      num: formInput.num,
      table: formInput.table,
      status: "waiting"
    }
    ]);
    setCnt(cnt+1)
    setformInput({name:"", num:0, table:0});
  }

  const chagestatus = (id:number|undefined,status:string) => {
    let newLists = [...lists]
    newLists.forEach(list=>{
      if(list.id===id){
        list.status = status ;
      }
    });
    setLists(newLists);
  }

  return(
    <div>
      <form>
        <label>
          <input 
            type="text"
            name="name"
            value={formInput.name || ''}
            onChange={(e)=> submitevent(e)}
          />
        </label>
        <label>
          <input 
            type="text"
            name="num"
            value={formInput.num || ''}
            onChange={(e)=> submitevent(e)}
          />
        </label>
        <label>
          <select 
            name="table"
            value={formInput.table || ''}
            onChange={(e)=> submitevent(e)}
          >
            {
              tableList.map((list,index)=>(
                <option key={index} >{list}</option>
              ))
            }
          
          </select>
        </label>
        <button onClick={(e) => pushbutton(e)}>
          順番待ちする
        </button>
        <div>
          <h3>順番待ち</h3>
          <ul>
            {
            lists.filter(list => list.status==="waiting").map(list => (
              <li key={list.id}>
                {list.name}
                {list.num}
                {list.table}
                <button onClick={() => chagestatus(list.id,"outside")}>取り消し</button>
                <button onClick={() => chagestatus(list.id,"inside")}>案内</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>店内</h3>
          <ul>
            {lists.filter(list => list.status==="inside").map(list => (
              <li key={list.id}>
                {list.name}
                {list.num}
                {list.table}
              <button onClick={() => chagestatus(list.id,"outside")}>お会計(退店)</button>
            </li>
            ))}
          </ul>
        </div>
      </form>
      {/* <Inside /> */}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>WatingBoard</h1>
      <Form/>
    </div>
  );
}

