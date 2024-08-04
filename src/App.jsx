import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import {TodoProvider} from "./Store.jsx";

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1 className="text-center">ToDo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  )
}

export default App
