import { Box } from "@chakra-ui/react";
import { ProfileCard } from "../card/profile";
import { SuggestionCard } from "../card/suggestions";
import { MetaCard } from "../card/meta";

export function SideRightNavbar() {
    return (
        <Box
            right={'0'}
            width={'370px'}
            height={'100vh'}
            position={'fixed'}
            borderLeft={'1px solid #545454'}>
            <ProfileCard />
            <SuggestionCard />
            <MetaCard />    
        </Box>
    )
}