import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="app">
      <h1>React 웹 앱</h1>
    </div>
  );
}

const rootNode = document.getElementById('react-app');
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);