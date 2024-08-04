import { TodoContext } from './Store';
import { useContext } from 'react';
const TodoItem = ({id, taskname, taskdesc}) => {
    const {deleteTodo} = useContext(TodoContext);
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>{taskname}</span>
            <span>{taskdesc}</span>
            <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    )
}

export default TodoItem;