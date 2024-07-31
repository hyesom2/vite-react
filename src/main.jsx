import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// > components
import App from '../App.jsx';

const rootNode = document.getElementById('react-app');
createRoot(rootNode).render(
  <StrictMode>
    <App />
  </StrictMode>
);