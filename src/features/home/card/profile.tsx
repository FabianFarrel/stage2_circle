import { Box, Button, Card, Heading, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { ButtonLink } from "../buttons/link";
import { ProfileModal } from "../modal/profile-modal";
import { useUser } from "../hooks/use-user";


export function ProfileCard() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const { data } = useUser();

    return (
        <Card
            mx={'auto'}
            mt={'20px'}
            width={'90%'}
            paddingBottom={'20px'}
            borderRadius={'5px'}
            backgroundColor={'#262626'}>
            <Box
                mx={'auto'}
                width={'90%'}>
                <Heading
<<<<<<< Updated upstream
                    as='h3'
                    my={'15px'}
                    bg={'#262626'}
                    color={'#FFFFFF'}>My Profile</Heading>
=======
                    mb={'10px'}
                    color={'white'}>
                    <ButtonLink color={'nav.title2'} bg={'none'} textDecoration={'none'} fontSize={'23px'} to={"/profile"}>My Profile</ButtonLink>
                </Heading>
>>>>>>> Stashed changes

                <Image
                    width={'100%'}
                    height={'100px'}
<<<<<<< Updated upstream
                    src=''
                    alt=''/>

                <Image
                    alt=''
=======
                    display={'block'}
                    borderRadius='10px'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4u76xJAm7BiHyeq_CQT4cuBP6bL9r1byrw&s' />

                <Image
>>>>>>> Stashed changes
                    top={'115px'}
                    left={'30px'}
                    boxSize='73px'
                    display={'block'}
                    borderRadius='500px'
                    position={'absolute'}
                    border={'3px solid black'}
<<<<<<< Updated upstream
                    src='' />
=======
                    src='https://images.unsplash.com/photo-1667053508464-eb11b394df83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' />
>>>>>>> Stashed changes

                <Button
                    width={'25%'}
                    top={'159px'}
                    right={'20px'}
                    height={'28px'}
                    onClick={onOpen}
                    fontSize={'10px'}
                    color={'white'}
                    fontWeight={'700'}
                    bg={'transparent'}
                    borderRadius={'20px'}
                    position={'absolute'}
                    border={'1px solid #FFFFFF'}>Edit Profile</Button>

                <Box
                    marginTop={'43px'}
                    marginLeft={'10px'}
                    color={'white'}
                    bg={'transparent'}>
<<<<<<< Updated upstream
                    <Text
                        bg={'transparent'}
                        fontWeight="bold"
                        fontSize="14px">✨ Delia ✨</Text>

                    <Text
                        bg={'transparent'}
                        color={'#909090'}
                        my={'5'}
                        fontSize="11px">@del</Text>

                    <Text
                        my="5"
                        bg={'transparent'}
                        fontSize="11px">Picked over by the worms, and weird fishes.</Text>
=======
                    
                        <Text
                            bg={'transparent'}
                            fontWeight="bold"
                            fontSize="14px">✨ {data?.fullName} ✨</Text>

                    
                        <Text
                            bg={'transparent'}
                            color={'nav.link'}
                            fontSize="11px">@{data?.userName}</Text>

>>>>>>> Stashed changes

                        <Text
                            bg={'transparent'}
                            fontSize="11px">{data?.bio}</Text>

                    <HStack bg={'transparent'}>
                        
                            <Text fontSize="11px" bg={'transparent'}>{data?.following} <Text color={'nav.link'} as={'span'} bg={'transparent'}>Following</Text></Text>
                        
                            <Text fontSize="11px" bg={'transparent'}>{data?.followers} <Text color={'nav.link'} as={'span'} bg={'transparent'}>Followers</Text></Text>
                    </HStack>
                </Box>
            </Box>

            <ProfileModal
                isOpen={isOpen}
                onClose={onClose}
                initialRef={initialRef}
                finalRef={finalRef} />
        </Card>
    )
}