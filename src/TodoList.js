import React from 'react';

/* Create an Array with 3 Objects */
const todoList = [
    {
      id: 1,
      title: 'Complete Assignment',
    },
    {
      id: 2,
      title: 'Create Pull Request',
    },
    {
      id: 3,
      title: 'Submit Assignment',
    },
  ];

const TodoList = () => (
        <ul>
          {todoList.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
      </ul>
    );

export default TodoList;