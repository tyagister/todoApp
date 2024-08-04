import TodoItem from './TodoItem';
import { TodoContext } from './Store';
import { useContext } from 'react';

const TodoList = () => {
    const {todoLists} = useContext(TodoContext);
    return (
        <ul className="list-group list-group-flush pt-4">
            {todoLists.map(todoList => <TodoItem key={todoList.id} id={todoList.id} taskname={todoList.taskname} taskdesc={todoList.taskdesc}/>)}
        </ul>
    )
}
export default TodoList;