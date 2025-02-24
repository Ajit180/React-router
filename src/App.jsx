import React from 'react'
import AppRoutes from './AppRoutes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const App = () => {
   const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
          <AppRoutes/>
      </QueryClientProvider>
  )
}

export default App
