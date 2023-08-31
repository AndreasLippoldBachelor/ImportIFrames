// src/App.js (Microfrontend "todo")
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Todo 1', completed: false },
    { id: 2, text: 'Todo 2', completed: false },
    { id: 3, text: 'Todo 3', completed: false },
    // Weitere Todos hier hinzufügen...
  ]);

  const [newTodoText, setNewTodoText] = useState('');

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim() !== '') {
      const newTodo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        text: newTodoText,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodoText('');
    }
  };

  return (
    <div className="app-container">
      <h1>Todos</h1>
      <form className="todo-form" onSubmit={handleTodoSubmit}>  
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Neues Todo erstellen..."
        />
        <button type="submit">Hinzufügen</button>
      </form>
    </div>
  );
};

export default App;
