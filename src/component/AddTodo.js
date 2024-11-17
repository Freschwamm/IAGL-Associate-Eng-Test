import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoRequest } from "../actions";

const AddTodo = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const handleAddtask = () => {
        if(task.trim()) {
            dispatch(addTodoRequest({ task }))
        }
        setTask("")
    }
    return (
        <div className="todo-add">
            <input
               type="text"
               value={task}
               onChange={(e) => setTask(e.target.value)}
               placeholder="Add a new task"
             />
             <button onClick={handleAddtask}>Add Task</button>
        </div>
        );

};
export default AddTodo