import { SideLeftNavbar } from "./pages/left";
import { SideRightNavbar } from "./pages/right";
import { HomePost } from "./pages/home-post";
import { HomeReply } from "./pages/home-reply";

export function Home() {
    return (
        <>
            <SideLeftNavbar />
            <HomePost />
            <HomeReply />
            <SideRightNavbar />
        </>
    );
}
