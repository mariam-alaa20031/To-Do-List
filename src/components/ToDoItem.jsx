import react,{useState}from 'react'
import './ToDoItem.css'

function ToDoItem(props){
    const [date,setDate]=useState(props.date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    }))
    const [item,setItem]=useState("")
    function changeDateHandler(){
           setDate("DONE!")
    }

    function removeItemHandler(){
            setItem("Remove")
    }
    return (
   item=="" && <div className='to-do-item'>
        <div className='date'>
            {"due: " + date}
        </div>
        <div className='description'>
           { props.description}
        </div>
        <div className='action-list'>
            <button onClick={changeDateHandler} className='done' >&#10004;</button>
            <button onClick={removeItemHandler} className='delete'>&#10060;</button>
        </div>
    </div>)
}

export default ToDoItem