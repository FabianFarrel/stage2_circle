
import { Box, Button, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { ProfileModal } from "../modal/profile-modal";
import { useUser } from "../hooks/use-user";

export function ProfileStatus() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const { data } = useUser();

    return (
        <Box
            mt={'10px'}
            px={'25px'}
            alignItems={'center'}>
            <Image
                width={'100%'}
                height={'100px'}
                display={'block'}
                borderRadius='10px'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4u76xJAm7BiHyeq_CQT4cuBP6bL9r1byrw&s' />

            <Box
                mt={'-35px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Image
                    ms={'20px'}
                    boxSize='80px'
                    display={'block'}
                    borderRadius='500px'
                    border={'3px solid black'}
                    src='https://images.unsplash.com/photo-1667053508464-eb11b394df83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' />

                <Button
                    mt={'45px'}
                    width={'25%'}
                    height={'28px'}
                    onClick={onOpen}
                    fontSize={'10px'}
                    fontWeight={'700'}
                    bg={'transparent'}
                    borderRadius={'20px'}
                    color={'white'}
                    border={'1px solid #FFFFFF'}>Edit Profile</Button>
            </Box>

            <Box
                mt={'10px'}
                color={'white'}
                bg={'transparent'}>

                    <Text
                        fontSize="16px"
                        fontWeight="bold"
                        bg={'transparent'}>✨ {data?.fullName} ✨</Text>


                    <Text
                        my={'1'}
                        fontSize="13px"
                        color={'home.link'}
                        bg={'transparent'}>@{data?.userName}</Text>


                    <Text
                        my="1"
                        fontSize="13px"
                        bg={'transparent'}>{data?.bio}</Text>

                <HStack bg={'transparent'}>
    
                        <Text
                            fontSize="13px"
                            bg={'transparent'}>{data?.following}
                            <Text
                                as={'span'}
                                color={'home.link'}
                                bg={'transparent'}> Following</Text></Text>
    
                        <Text
                            fontSize="13px"
                            bg={'transparent'}>{data?.followers}
                            <Text
                                as={'span'}
                                color={'home.link'}
                                bg={'transparent'}> Followers</Text></Text>
                </HStack>
            </Box>
            <ProfileModal
                isOpen={isOpen}
                onClose={onClose}
                initialRef={initialRef}
                finalRef={finalRef} />
        </Box>
    )
}