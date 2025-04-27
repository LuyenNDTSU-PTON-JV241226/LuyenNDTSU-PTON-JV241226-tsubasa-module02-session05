import React from 'react';

const TodoItem = ({ task, onDelete }) => {
  return (
    <div style={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
      <span style={{ flex: 1 }}>{task.title}</span>
      <button onClick={() => onDelete(task.id)} style={{ backgroundColor: 'red', color: 'white' }}>
        Xóa
      </button>
    </div>
  );
};

export default TodoItem;
