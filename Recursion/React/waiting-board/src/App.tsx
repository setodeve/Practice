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
  
  let customer_id = 0 ;

  const [formInput,setformInput] = useState(
    { name:"", num:0, table:0 }
  );
  
  const [lists,setLists] = useState<Props[]>([]);
  
  const submitevent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target;
    setformInput({...formInput, [name]:value});
  }
  
  const pushbutton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(formInput.name==="" || formInput.num===0 ) return ;
    setLists([
    ...lists,
    { 
      id: customer_id++,
      name: formInput.name,
      num: formInput.num,
      table: formInput.table,
      status: "waiting"
    }
    ]);
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
          <input 
            type="text"
            name="table"
            value={formInput.table || ''}
            onChange={(e)=> submitevent(e)}
          />
        </label>
        <button onClick={(e) => pushbutton(e)}>
          順番待ちする
        </button>
        <div>
          <h3>順番待ち</h3>
          <ul>
            {lists.filter(list => list.status==="waiting").map(list => (
              <li value={list.id}>
                {list.name}
                <button>取り消し</button>
                <button>案内</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>店内</h3>
          <ul>
            {lists.filter(list => list.status==="inside").map(list => (
              <li value={list.id}>
              {list.name}
              <button>お会計(退店)</button>
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

