import { Box, Image, Text } from "@chakra-ui/react";
import { UserEntity } from "../../../entities/user";
import FollowButton from "../buttons/follow";
import { ButtonLink } from "../buttons/link";
import { SearchNoResult } from "./search-no-result";

interface SearchResultProps {
    result: UserEntity[];
}

export function SearchResult({ result }: SearchResultProps) {
    if (result.length === 0) {
        return (
            <SearchNoResult />
        );
    }

    return (
        <>
            {result.map((user) => {
                return (
                    <Box
                        mt={'13px'}
                        bg={'none'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}>
                        <Box
                            display={'flex'}
                            bg={'none'}
                            alignItems={'center'} >
                            <Image
                                alt=''
                                top={'115px'}
                                left={'30px'}
                                boxSize='40px'
                                display={'block'}
                                borderRadius='500px'
                                src={user.image} />

                            <ButtonLink textDecoration={'none'} state={user.id} to={`/profile-people/${user.id}`} bg={'none'}>
                                <Text
                                    as={'p'}
                                    ms={'10px'}
                                    color={'white'}
                                    fontSize={'12px'}
                                    fontWeight={'bold'}
                                    transition={"color 0.2s ease-in-out"}
                                    _hover={{ color: 'nav.button.hoverText' }}>{user.fullName}
                                    <Text
                                        fontSize={'10px'}
                                        color={'#b8b8b8'}>@{user.userName}</Text>
                                </Text>
                            </ButtonLink>
                        </Box>
                        <Box bg={'none'}>
                            <FollowButton userId={user.id} />
                        </Box>
                    </Box>
                )
            })}
        </>
    );
}