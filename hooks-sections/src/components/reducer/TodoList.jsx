import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos = [], onDeleteTodo}) => {
    return (
        todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo}/>
        ))
            
    )
}
