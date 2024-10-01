import { Box } from "@chakra-ui/react";
import { MetaCard } from "../card/meta";
import { SuggestionCard } from "../card/suggestions";

export function SideRightNoSgNavbar() {
    return (
        <Box>
            <SuggestionCard />
            <MetaCard />    
        </Box>
    )
}