import { Box, Button, Image, Text } from "@chakra-ui/react";
import { ButtonLink } from "../buttons/link";
import { useAllUsers } from "../hooks/use-all";


export function AccFollowCard() {
    const { data } = useAllUsers();
    
    return (
        <>
            {data?.map((user) => {
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
                                src='' />

<<<<<<< Updated upstream
                    <Text 
                        as={'p'} 
                        ms={'10px'} 
                        bg={'#262626'} 
                        color={'#FFFFFF'} 
                        fontSize={'12px'} 
                        fontWeight={'bold'}>Handika
                        <Text 
                            bg={'#262626'} 
                            fontSize={'10px'} 
                            color={'#909090'}>@Handika</Text>
                    </Text>
                </Box>
                <Spacer bg={'#262626'}/>
                <Box bg={'#262626'}>
                    <Button
                        height={'28px'}
                        color={'#FFFFFF'}
                        fontSize={'10px'}
                        bg={'transparent'}
                        fontWeight={'700'}
                        padding={'5px 13px'}
                        borderRadius={'20px'}
                        border={'1px solid #FFFFFF'}>Follow</Button>
                </Box>
        </Box>
=======
                            <ButtonLink textDecoration={'none'} to={"/profile-people"} bg={'none'}>
                                <Text
                                    as={'p'}
                                    ms={'10px'}
                                    color={'white'}
                                    fontSize={'12px'}
                                    fontWeight={'bold'}>{user.fullName}
                                    <Text
                                        fontSize={'10px'}
                                        color={'nav.link'}>@{user.userName}</Text>
                                </Text>
                            </ButtonLink>
                        </Box>
                        <Box bg={'none'}>
                            <Button
                                height={'28px'}
                                color={'white'}
                                fontSize={'10px'}
                                bg={'transparent'}
                                fontWeight={'700'}
                                padding={'5px 13px'}
                                borderRadius={'20px'}
                                border={'1px solid #FFFFFF'}>Follow</Button>
                        </Box>
                    </Box>
                )
            })
            }
        </>
>>>>>>> Stashed changes
    )
}