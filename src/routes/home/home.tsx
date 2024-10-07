import { Box } from "@chakra-ui/react";
import { SideLeftNavbar } from "../../features/home/left_right/left";
import { SideRightNavbar } from "../../features/home/left_right/right"; 
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/use-store";
import { SideRightNoSgNavbar } from "../../features/home/left_right/right copy";
import { SideRightFollowNavbar } from "../../features/home/left_right/right-follow";

export function Home() {
    const user = useAppSelector((state) => state.auth);
    const location = useLocation();

    if (!Object.keys(user).length) return <Navigate to={"/login"} />;
    if (!user.id) return <Navigate to={"/login"} />;

    const isProfilePage = location.pathname.includes('/profile');
    const isThesePage = location.pathname.includes('/follow') || location.pathname.includes('/search');

    return (
        <Box display={'flex'} width={'100%'} height={'100vh'} bg={'#1D1D1D'} overflowY={'auto'}>
            <Box flex={0.9}>
                <SideLeftNavbar />
            </Box>
            <Box flex={2} overflowY={'auto'} borderRight={'1px solid #545454'} borderLeft={'1px solid #545454'}>
                <Outlet />
            </Box>
            <Box flex={1} overflowY={'auto'}>
                {isProfilePage ? <SideRightNoSgNavbar /> : isThesePage ? <SideRightFollowNavbar /> : <SideRightNavbar />}
            </Box>
        </Box>
    );
}