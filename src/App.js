import React from 'react';
import Header from "./Header";
import Content from "./Content";
import {useState} from 'react';
import Footer from './Footer';
import AddItem from './AddItem';

function App(){
  const [items,setItems]=useState(
    [
        {
            id:1,
            checked:true,
            item:"WakeUp at 5."
        },
        {
            id:2,
            checked:false,
            item:"Attend Class."
        },
        {
            id:3,
            checked:true,
            item:"Workout."
        }
    ]
);
const [newItem, setNewItem]=useState('')

const addItem=(item)=>{
  const id=items.length ? items[items.length-1].id + 1 : 1;
  const addNewItem={id  ,checked:false,item}
  const listItems=[...items,addNewItem]
  setItems(listItems)
  localStorage.setItem("to_do_list",JSON.stringify(listItems))
}

const handleCheck=(id)=>{
      const listItems=items.map((item)=>
      item.id===id?{...item,checked:!item.checked}:item)
      setItems(listItems)
    }           
const delItem=(id)=>{
    const delItems=items.filter((item)=>
    item.id!==id)
    setItems(delItems)
}
const handleSubmit=(e)=>{
     e.preventDefault()
     if(!newItem) return;
     addItem(newItem)
     setNewItem('')
}

  return <div>
    <Header title='To Do List'></Header>
    <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
    ></AddItem>
    <Content
       items={items}
       handleCheck={handleCheck}
       delItem={delItem}
    />
    <Footer
       length={items.length}
    />
  </div>
}
export default App;
