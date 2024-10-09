import { useEffect } from 'react';
import { UserStoreDTO } from './features/auth/types/dto';
import { apiV1 } from './libs/api';
import { AppRouter } from './routes';
import { setUser } from './store/auth-slice';
import { useAppDispatch } from './store/use-store';
import Cookies from "js-cookie";
import axios from 'axios'; // Make sure to import axios

function App() {
    const dispatch = useAppDispatch();
    

    async function checkAuth() {
        const token = Cookies.get("token");
        console.log("Token:", token);  // Check if the token exists
    
        if (!token) {
            console.error("No token found in cookies.");
        } else {
            console.log("Token found in cookies:", token);
        }
        
        try {
            const { data } = await apiV1.get<null, { data: UserStoreDTO }>("/auth/check", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            // Dispatch user data to the store
            dispatch(setUser(data));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Axios Error:", error.message);
                console.error("Response Data:", error.response?.data); // Log the response data
                console.error("Response Status:", error.response?.status); // Log the status
            } else {
                console.error("Unexpected Error:", error);
            }
        }
    }
    

    useEffect(() => {
        checkAuth();  
    }, []);

    return <AppRouter />;
}

export default App;
