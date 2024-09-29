
import { Box } from "@chakra-ui/react";
import { AccFollowCard } from "../card/acc-follow-card";
import { AccFollowingCard } from "../card/acc-following-card";
import { SearchInput } from "../page-search/search-input";
import { SearchNoResult } from "../page-search/search-no-result";

export function SearchLayout() {
    return (
        <Box
            mt={'20px'}
            px={'25px'}
            pb={'20px'}
            alignItems={'center'}
            justifyContent={'center'}>

            <SearchInput />
            { /*<SearchNoResult />*/ }
            <AccFollowCard />
            
            
        </Box>
    )
}