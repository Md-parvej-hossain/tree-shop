import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ThemeProvider from './ThemeProvider/ThemeProvider.jsx';
import { RouterProvider } from 'react-router';
import router from './routes/Routes.jsx';
// import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import 'aos/dist/aos.css';
import Aos from 'aos';
Aos.init();
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  </StrictMode>,
);
