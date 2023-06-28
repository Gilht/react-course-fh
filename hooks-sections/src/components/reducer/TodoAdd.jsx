import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

    const {onInputChange, onResetForm, description } = useForm({
        description: ''
    })
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }
    
        onNewTodo(newTodo);
        onResetForm();

    }
    
  

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text"
                placeholder='the next todo?'
                className='form-control'
                name="description"
                value={description}
                onChange={onInputChange}
            />

            <button type='submit'
                className='btn btn-outline-primary mt-1'>
                Add Item
            </button>
        </form>
    )
}
 