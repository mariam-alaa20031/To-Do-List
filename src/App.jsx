import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoItems from './components/ToDoItems'
import ToDoForm from './components/ToDoForm'

function App() {
  const dummyData=[{
    id:"n1",
    description:"Finish Raisa Assessment",
    date: new Date("01-05-2024")
  },
  {
    id:"n2",
    description:"Finish Ejada Assessment",
    date: new Date("01-06-2024")
  }]
  const [items,setItems]=useState(dummyData)
  function addToDoHandler(newItem){
       setItems((prevItems)=>{
        return [...prevItems, newItem]
       })
  }
  return (
  <div> 
  <h1>To Do List</h1>  
  <div className='wrapper'>
  <ToDoForm addToDo={addToDoHandler}/>
  <ToDoItems items={items}/>
  </div> 
  </div>
  )
}

export default App
