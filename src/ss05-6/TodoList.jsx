import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;