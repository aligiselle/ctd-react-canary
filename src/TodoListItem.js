import React from 'react';

function TodoListItem(props){
    return(
        <li>{props.todoList.title}</li>
    );
};

export default TodoListItem;