import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { DetailLayout } from "../features/home/layout/layout-detail";
import { ProfileLayout } from "../features/home/layouts/layout-profile";
import { ProfilePeopleLayout } from "../features/home/layouts/layout-profile-p";
import { SearchLayout } from "../features/home/layouts/layout-search";
import { FollowLayout } from "../features/home/layouts/layout-follow";
import { LayoutStatus } from "../features/home/layouts/layout-status";
import { ForgotRoute } from "./forgot";
import { LoginRoute } from "./login";
import {RegisterRoute} from "./register";
import { ResetRoute } from "./reset";
import { Home } from "./home/home";
import { HomeLayout } from "../features/home/layouts/layout-home";

export function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    index: true,
                    element: <HomeLayout />,
                },
                {
                    path: "status/:postId",
                    element: <LayoutStatus />,
                },
                {
                    path: "profile",
                    element: <ProfileLayout />,
                },
                {
                    path: "profile-people/:userId",
                    element: <ProfilePeopleLayout />,
                },
                {
                    path: "search",
                    element: <SearchLayout />,
                },
                {
                    path: "follow",
                    element: <FollowLayout />,
                },
                
            ]
        },
        {
            path: "/login",
            element: <LoginRoute />,
        },
        {
            path: "/register",
            element: <RegisterRoute />,
        },
        {
            path: "/reset",
            element: <ResetRoute />,
        },
        {
            path: "/forgot",
            element: <ForgotRoute />,
        },
    ]);

  return <RouterProvider router={router} />;
}
