import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginRoute } from "./login"; 
import { RegisterRoute } from "./register"; 

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginRoute />,
    },
    {
      path: "/register",
      element: <RegisterRoute />,
    },
  ]);

  return <RouterProvider router={router} />;
}
