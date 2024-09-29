<<<<<<< Updated upstream
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
=======
import { useEffect } from 'react';
import { UserStoreDTO } from './features/auth/types/dto';
import { apiV1 } from './libs/api';
import { AppRouter } from './routes';
import { setUser } from './store/auth-slice';
import { useAppDispatch } from './store/use-store';
import Cookies from "js-cookie";

function App() {
  const dispatch = useAppDispatch();

  async function checkAuth() {
    const { data } = await apiV1.get<null, { data: UserStoreDTO }>("/auth/check", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`
      }
    })

    dispatch(setUser(data))
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return <AppRouter />
}

export default App
>>>>>>> Stashed changes
