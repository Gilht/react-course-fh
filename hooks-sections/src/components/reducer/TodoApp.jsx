import React from 'react'
import { useReducer, useEffect} from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

const initState = [
    // {
    //     id: new Date().getTime(),
    //     description: "Colect Data",
    //     done: false
    // }
]

const init = () => {
    return JSON.parse(localStorage.getItem("todos") || []);
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initState, init);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    
    }, [todos])
    

    const handleNewTodo = (todo) => {

        dispatch({
            type: "Add Todo",
            payload: todo
        })
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "Remove Todo",
            payload: id 
        })
    }

    return (
        <div className="container'fluid">
            <h1>Todo List: 10<small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}/>
                </div>

                <div className="col-5">
                    <h4>add todo</h4>
                    
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </div>
    )
}
