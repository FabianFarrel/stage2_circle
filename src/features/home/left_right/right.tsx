import { Box } from "@chakra-ui/react";
import { ProfileCard } from "../card/profile";
import { SuggestionCard } from "../card/suggestions";
import { MetaCard } from "../card/meta";

export function SideRightNavbar() {
    return (
        <Box>
            <ProfileCard />
            <SuggestionCard />
            <MetaCard />    
        </Box>
    )
}