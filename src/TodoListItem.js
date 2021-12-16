import React from 'react';

const TodoListItem = ({todo,onRemoveTodo}) => (
    
        <li>
            <span>{todo.title} </span>
            <span><button type="button" onClick={() => onRemoveTodo(todo)}>Remove</button></span>
        </li>
    );

export default TodoListItem;