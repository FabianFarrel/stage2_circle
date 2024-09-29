import { Box } from "@chakra-ui/react";
import { ProfileCard } from "../card/profile";
import { SuggestionCard } from "../card/suggestions";
import { MetaCard } from "../card/meta";

export function SideRightNavbar() {
    return (
        <Box
            right={'0'}
<<<<<<< Updated upstream:src/features/home/pages/right.tsx
            width={'370px'}
=======
            width={'402px'}
>>>>>>> Stashed changes:src/features/home/left_right/right.tsx
            height={'100vh'}
            position={'fixed'}
            borderLeft={'1px solid #545454'}>
            <ProfileCard />
            <SuggestionCard />
            <MetaCard />    
        </Box>
    )
}