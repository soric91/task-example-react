import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TaskContextProvider } from './Context/TaskContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>,
);
