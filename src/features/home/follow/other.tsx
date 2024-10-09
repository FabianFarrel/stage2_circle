import { Box, Image, Text } from "@chakra-ui/react";
import FollowButton from "../buttons/follow";
import { ButtonLink } from "../buttons/link";
import { useAllUsers } from "../hooks/use-all";

export function FollowItem() {
    const { data } = useAllUsers();
    return (
        <>
            {data?.map((user) => (
                <Box
                    key={user.id} // Add a unique key for each item
                    mt={'13px'}
                    bg={'none'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}>
                    <Box
                        display={'flex'}
                        bg={'none'}
                        alignItems={'center'}>
                        <Image
                            alt=''
                            boxSize='40px'
                            display={'block'}
                            borderRadius='500px'
                            src={user.image} />

                        <ButtonLink textDecoration={'none'} state={user.id} to={`/profile-people/${user.id}`} bg={'none'}>
                            <Box ms={'10px'}>
                                <Text
                                    as='div' // Use div to ensure block-level behavior
                                    color={'white'}
                                    fontSize={'12px'}
                                    fontWeight={'bold'}
                                    transition={"color 0.2s ease-in-out"}
                                    _hover={{ color: '#76bf73' }}>
                                    {user.fullName}
                                </Text>
                                <Text
                                    as='div' // Use div to ensure block-level behavior
                                    fontSize={'10px'}
                                    color={'#b8b8b8'}>
                                    @{user.userName}
                                </Text>
                            </Box>
                        </ButtonLink>
                    </Box>
                    <Box bg={'none'}>
                        <FollowButton userId={user.id} />
                    </Box>
                </Box>
            ))}
        </>
    );
}
