import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navigation from './components/Navigation';
import { RegisterRoute } from "./routes/register";
import { LoginRoute } from './routes/login';
import { ForgotRoute } from './routes/forgot';
import { ResetRoute } from './routes/reset';
import { Home } from './features/home/home';

function App() {
  return (
    <Router>
      <Navigation />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/forgot" element={<ForgotRoute />} />
          <Route path="/reset" element={<ResetRoute />} />
          <Route path="/register" element={<RegisterRoute />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
