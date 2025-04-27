import React, { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '100%', padding: '8px' }}
      />
      <button onClick={handleAdd} style={{ marginTop: '10px', width: '100%', backgroundColor: 'red', color: 'white' }}>
        Thêm
      </button>
    </div>
  );
};

export default TodoInput;