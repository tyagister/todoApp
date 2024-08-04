import { createContext, useReducer } from "react";
import {v4 as uuid} from 'uuid';
const initialState = [{id: uuid(), taskname: "first", taskdesc: "firstdesc"}];
export const TodoContext = createContext();

const todoReducer = (state, action) => {
    console.log(state, action)
    if (action.type === 'ADD_TODO') {
        return [...state, action.todoData];
    } 
    if (action.type === 'DELETE_TODO') {
        return state.filter((user) => user.id !== action.id);
    } else {
        return state;
    }
}

export const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const addTodo = (todoData) => {
        dispatch({ type: 'ADD_TODO', todoData });
    }
    const deleteTodo = (id) => {
        dispatch({ type: 'DELETE_TODO', id});
    }
    return (
        <TodoContext.Provider value={{todoLists: state, addTodo, deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}