import react,{useState} from 'react'
import './ToDoForm.css'

function ToDoForm(props){

    const [enterDate, setEnteredDate]=useState("")
    const [enterToDo, setEnteredToDo]=useState("")
    
    function toDoChangeHandler(event){
        setEnteredToDo(event.target.value)
    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value)
    }
    function saveNoteHandler(event){
       event.preventDefault();
        const newNote={date: new Date(enterDate),
                       description: enterToDo,
                       id:Math.random().toString()}    
        props.addToDo(newNote);                   
    }
    return (
        <form onSubmit={saveNoteHandler}>
            <div className="new-note">
             <label>To-Do </label>
             <input type="text" onChange={toDoChangeHandler} placeholder="description"/>
             <label>Due </label>
             <input type="date" onChange={dateChangeHandler} placeholder="date"/>
            </div>
            <div className="new-note-actions">
                <button className='submit-note' >add note</button>
            </div>

        </form>
    )
}

export default ToDoForm