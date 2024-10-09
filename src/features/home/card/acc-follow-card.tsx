import { Box, Image, Text } from "@chakra-ui/react";
import FollowButton from "../buttons/follow";
import { ButtonLink } from "../buttons/link";
import { useAllUsers } from "../hooks/use-all";
import { UserEntity } from "../../../entities/user";
import { useEffect, useState } from "react";

export function AccFollowCard() {
    const { data } = useAllUsers();
    const [randomUsers, setRandomUsers] = useState<UserEntity[]>([]);

    const getRandomUsers = (users: UserEntity[]): UserEntity[] => {
        if (!users || users.length === 0) return [];
        const shuffled = users.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    };

    useEffect(() => {
        if (data && randomUsers.length === 0) {
            const selectedUsers = getRandomUsers(data);
            setRandomUsers(selectedUsers);
        }
    }, [data]);

    return (
        <>
            {randomUsers?.map((user) => (
                <Box
                    key={user.id} // Added a unique key for each child
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
                            mr={'6px'}
                            alt=''
                            top={'115px'}
                            left={'30px'}
                            boxSize='40px'
                            display={'block'}
                            borderRadius='500px'
                            src={user.image} />

                        <ButtonLink textDecoration={'none'} state={user.id} to={`/profile-people/${user.id}`} bg={'none'}>
                            <Text
                                ml={'10px'}
                                ms={'0px'}
                                color={'white'}
                                fontSize={'12px'}
                                fontWeight={'bold'}
                                transition={"color 0.2s ease-in-out"}
                                _hover={{ color: 'nav.button.hoverText' }}>
                                {user.fullName}
                            </Text>
                            <Text
                                fontSize={'10px'}
                                color={'#b8b8b8'}
                                mt={1}> {/* Use margin-top for spacing */}
                                @{user.userName}
                            </Text>
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
