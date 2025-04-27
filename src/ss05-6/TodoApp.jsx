import React, { useReducer, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTasks = [...state, { id: Date.now(), title: action.payload }];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return newTasks;
    case 'DELETE_TASK':
      const filteredTasks = state.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return filteredTasks;
    default:
      return state;
  }
};

const TodoApp = () => {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  const addTask = (title) => {
    dispatch({ type: 'ADD_TASK', payload: title });
  };

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <div style={{ width: '400px', margin: 'auto', marginTop: '50px' }}>
      <TodoInput onAdd={addTask} />
      <TodoList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default TodoApp;