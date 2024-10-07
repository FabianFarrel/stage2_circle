import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { theme } from './custom/theme';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "./assets/style.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={new QueryClient}>
          <App />
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  </StrictMode>,
)