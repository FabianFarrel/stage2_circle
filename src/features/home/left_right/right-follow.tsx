import { Box } from "@chakra-ui/react";
import { MetaCard } from "../card/meta";
import { ProfileCard } from "../card/profile";

export function SideRightFollowNavbar() {
    return (
        <Box>
            <ProfileCard />
            <MetaCard />    
        </Box>
    )
}