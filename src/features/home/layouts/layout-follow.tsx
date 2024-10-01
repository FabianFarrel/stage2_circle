import { Box, Text } from "@chakra-ui/react";
import { Follows } from "../follow/other";

export function FollowLayout() {
    return (
        <Box
            mt={'20px'}
            px={'25px'}
            pb={'20px'}
            alignItems={'center'}
            justifyContent={'center'}>
            <Text color={'white'} as={'h1'}>Follows</Text>

            <Follows />
        </Box>
    )
}