import { Box } from "@chakra-ui/react";
import FollowsLayout from "../follows/following-tab";

export function FollowLayout() {
    return (
        <Box
            mt={'20px'}
            px={'25px'}
            pb={'20px'}
            alignItems={'center'}
            justifyContent={'center'}>
            <FollowsLayout/>
    
        </Box>
    )
}