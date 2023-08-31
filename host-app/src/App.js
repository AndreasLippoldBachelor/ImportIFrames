// src/App.js (Host-Anwendung)
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentMicrofrontend, setCurrentMicrofrontend] = useState(null);

  const loadMicrofrontend = (microfrontendName) => {
    setCurrentMicrofrontend(microfrontendName);
  };

  const renderMicrofrontend = () => {
    switch (currentMicrofrontend) {
      case 'todo':
        return <iframe src="http://localhost:3001" title="Microfrontend 'todo'" />;
      case 'todolist':
        return <iframe src="http://localhost:3002" title="Microfrontend 'todolist'" />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <nav>
        <ul>
          <li onClick={() => loadMicrofrontend('todo')}>Todo</li>
          <li onClick={() => loadMicrofrontend('todolist')}>TodoList</li>
        </ul>
      </nav>
      <div className="microfrontend-container">
        {renderMicrofrontend()}
      </div>
    </div>
  );
};

export default App;
