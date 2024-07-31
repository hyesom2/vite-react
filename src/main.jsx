import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// > css
import '@/styles/globals.css';
import '@/styles/miniReset.css';
import '@/styles/reset.css';
// > components
import App from '@/App.jsx';

const rootNode = document.getElementById('react-app');
createRoot(rootNode).render(
  <StrictMode>
    <App />
  </StrictMode>
);