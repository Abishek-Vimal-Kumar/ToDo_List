import React from 'react';
import {FaTrash} from "react-icons/fa";

const Content=({items,handleCheck,delItem})=>{
   
    return (
        <main>
            <center>
            <ul>
                {items.map((item)=>(
                <div id='cbox'>
                <li className='item' key={item.id}>
                    <input id='check' type="checkbox"
                    onChange={()=>handleCheck(item.id)}
                    checked={item.checked}></input>
                    <label id='todo'>{item.item}</label>
                    <FaTrash
                    id='trash'
                    role="button"
                    onClick={()=>delItem(item.id)}>
                    </FaTrash>
                </li>
                </div>
                ))}
            </ul>
            </center>
        </main>
    )
}
export default Content;