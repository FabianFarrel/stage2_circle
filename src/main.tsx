import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
<<<<<<< Updated upstream
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './custom/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
=======
import { theme } from './config/theme.ts';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={new QueryClient}>
          <App />
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
>>>>>>> Stashed changes
  </StrictMode>,
)