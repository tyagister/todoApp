import { TodoContext } from './Store';
import { useState, useRef } from 'react';
import { useContext } from 'react';
import { v4 as uuid } from 'uuid';
const TodoForm = () => {
    const {addTodo} = useContext(TodoContext);
    const [formData, setFormData] = useState({id: uuid(), taskname: "", taskdesc: ""});
    const [isInvalid, setIsInvalid] = useState(false);
    const taskname = useRef();
    const handleTaskname = (e) => {
        setFormData({ ...formData, taskname: e.target.value });
    }
    const handleTaskdesc = (e) => {
        setFormData({ ...formData, taskdesc: e.target.value });
    }
    const submitHandle = (e) => {
        e.preventDefault();
        if(formData.taskname !== "" && formData.taskdesc !== ""){
            addTodo(formData);
        }else{
            setIsInvalid(true)
        }
        setFormData({ id: uuid(), taskname: "", taskdesc: "" });
        taskname.current.focus();
    }
    return (
        <form noValidate onSubmit={submitHandle}>
            <div className="mb-3">
                <input type="text" ref={taskname} onChange={handleTaskname} value={formData.taskname} name="taskname" className={isInvalid ? "is-invalid form-control" : "form-control"} id="taskname" placeholder="taskname" />
            </div>
            <div className="mb-3">
                <input type="text" onChange={handleTaskdesc} value={formData.taskdesc} name="taskdesc" className={isInvalid ? "is-invalid form-control" : "form-control"} id="taskdesc" placeholder="taskdesc" />
            </div>
            <button className="btn btn-primary w-100">Add Task</button>
        </form>
    )
}
export default TodoForm;