// src/main.tsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<Router> {/* Wrap App with Router */}
 <QueryClientProvider client={queryClient}>
 
    <App />
   
  </QueryClientProvider>
</Router>
  </StrictMode>
);
