import { Box, Text } from "@chakra-ui/react";
import { FollowItem } from "../follow/other";

export function FollowLayout() {
    return (
        <Box
            fontSize={'30px'}
            mt={'20px'}
            px={'25px'}
            pb={'20px'}
            alignItems={'center'}
            justifyContent={'center'}>
            <Text color={'white'} as={'h1'}><b>Follows</b></Text>

            <FollowItem />
        </Box>
    )
}