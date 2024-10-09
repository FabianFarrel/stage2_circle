import axios, { AxiosError } from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const apiV1 = axios.create({
  baseURL: `${baseUrl}`,
});

apiV1.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const checkAuth = async () => {
  try {
    const response = await apiV1.get("/auth/check");
    console.log("Auth check success:", response.data);
  } catch (error) {
    // Narrow the type to AxiosError to check the response property
    if (error instanceof AxiosError) {
      console.error("Axios Error:", error.message);
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    } else {
      console.error("Unexpected Error:", error);
    }
  }
};
