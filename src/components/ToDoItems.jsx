import react from "react"
import ToDoItem from "./ToDoItem"
import './ToDoItems.css'

function ToDoItems(props) {
    console.log(props.items)
    return (
        <div className="items">
            {props.items.map((item) => (
                <ToDoItem 
                    key={item.id} 
                    id={item.id} 
                    date={item.date} 
                    description={item.description} 
                />
            ))}
        </div>
    );
}


export default ToDoItems