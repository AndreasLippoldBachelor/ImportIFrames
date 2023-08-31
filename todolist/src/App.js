// src/App.js (Microfrontend "todo")
import React from 'react';
import './App.css';

const todos = [
  { id: 1, text: 'Todo 1' },
  { id: 2, text: 'Todo 2' },
  { id: 3, text: 'Todo 3' },
  // Weitere Todos hier hinzufügen...
];

const App = () => {
  return (
    <div className="app-container">
      <h1>Todos</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {todo.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
