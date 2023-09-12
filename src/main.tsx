import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserProvider } from './context/users';
import App from './App.tsx'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './tanstack/config.ts';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <App />
      </UserProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
