import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ThemeProvider from './ThemeProvider/ThemeProvider.jsx';
import { RouterProvider } from 'react-router';
import router from './routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>
);
