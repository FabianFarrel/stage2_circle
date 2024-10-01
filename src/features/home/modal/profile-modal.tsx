// import {  } from "@chakra-ui/modal";
import { Avatar, Box, Button, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Text, Textarea } from "@chakra-ui/react";
import { RefObject } from "react";
import { LuImagePlus } from "react-icons/lu";
import { useUser } from "../hooks/use-user";

interface InitialFocusModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialRef: RefObject<HTMLInputElement>;
    finalRef: RefObject<HTMLButtonElement>;
}

export function ProfileModal({ isOpen, onClose, initialRef, finalRef }: InitialFocusModalProps) {
    const { register, handleSubmit, onSubmit, data } = useUser();
    return (
        <>
            <Modal
                onClose={onClose}
                isOpen={isOpen}
                finalFocusRef={finalRef}
                initialFocusRef={initialRef}>
                <ModalOverlay
                    backdropFilter="blur(10px)"
                    backgroundColor="rgba(128, 128, 128,0.1)" />

                <ModalContent
                    minW="45vw"
                    overflow="auto"
                    background="#1D1D1D"
                    borderRadius={"15px"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalBody pb={6}>
                            <Box
                                mb="10px"
                                mt={'5px'}
                                width="100%"
                                display="flex">
                                <Text fontWeight={'bold'} color={'white'}>Edit Profile</Text>

                                <ModalCloseButton
                                    width="20px"
                                    height="20px"
                                    m={"5px 2px"}
                                    rounded="full"
                                    fontSize={"7px"}
                                    color="white"
                                    fontWeight={"bold"}
                                    border="1.5px solid #909090" />
                            </Box>

                            <Box>
                                <Image
                                    width={'100%'}
                                    height={'125px'}
                                    display={'block'}
                                    borderRadius='10px'
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4u76xJAm7BiHyeq_CQT4cuBP6bL9r1byrw&s' />

                                <Box
                                    mt={'-35px'}
                                    display={'flex'}
                                    alignItems={'center'}>
                                    <Avatar
                                        ms={'20px'}
                                        boxSize='80px'
                                        display={'block'}
                                        borderRadius='500px'
                                        border={'3px solid black'}
                                        src='https://images.unsplash.com/photo-1667053508464-eb11b394df83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' />

                                    <FormControl>
                                        <FormLabel
                                            display={'flex'}
                                            fontSize={'30px'}
                                            cursor={'pointer'}
                                            color={'home.button.hoverText'}>
                                            <Box
                                                mt={'8px'}
                                                ms={'-59px'}
                                                bg={'#323232'}
                                                color={'white'}
                                                padding={'7px'}
                                                fontSize={'20px'}
                                                borderRadius={'full'}>
                                                <LuImagePlus />
                                            </Box></FormLabel>
                                        <Input type='file' hidden />
                                    </FormControl>
                                </Box>

                                <Box>
                                    <FormControl color={'home.text'}>
                                        <FormLabel
                                            mt={'15px'}
                                            p={'10px'}
                                            fontSize={'16px'}
                                            color={'white'}
                                            borderRadius={'7px'}
                                            border={'1px solid #545454'} >Name
                                            <Input
                                                type="text"
                                                mt={'-10px'}
                                                ms={'-14px'}
                                                border={'none'}
                                                fontSize={'14px'}
                                                color={'home.text'}
                                                value={data?.fullName}
                                                {...register("fullName")}
                                                _focusVisible={{
                                                    borderColor: "transparent",
                                                }}
                                                _hover={{
                                                    borderColor: "transparent",
                                                }}></Input>
                                        </FormLabel>
                                        <FormLabel
                                            mt={'15px'}
                                            p={'10px'}
                                            fontSize={'16px'}
                                            color={'white'}
                                            borderRadius={'7px'}
                                            border={'1px solid #545454'} >Username
                                            <Input
                                                type="text"
                                                mt={'-10px'}
                                                ms={'-14px'}
                                                border={'none'}
                                                fontSize={'14px'}
                                                color={'home.text'}
                                                value={data?.userName}
                                                {...register("userName")}
                                                _focusVisible={{
                                                    borderColor: "transparent",
                                                }}
                                                _hover={{
                                                    borderColor: "transparent",
                                                }}></Input>
                                        </FormLabel>
                                        <FormLabel
                                            mt={'15px'}
                                            p={'10px'}
                                            fontSize={'16px'}
                                            color={'white'}
                                            borderRadius={'7px'}
                                            border={'1px solid #545454'} >Bio
                                            <Textarea
                                                mt={'-10px'}
                                                ms={'-14px'}
                                                resize={'none'}
                                                border={'none'}
                                                fontSize={'14px'}
                                                color={'home.text'}
                                                value={data?.bio}
                                                {...register("bio")}
                                                _focusVisible={{
                                                    borderColor: "transparent",
                                                }}
                                                _hover={{
                                                    borderColor: "transparent",
                                                }}></Textarea>
                                        </FormLabel>
                                    </FormControl>
                                </Box>
                            </Box>
                        </ModalBody>

                        <ModalFooter
                            me={"12 ;px"}
                            display="flex"
                            justifyContent="end"
                            borderTop="1px solid grey">
                            <Button
                                type="submit"
                                border={'none'}
                                height={'30px'}
                                fontSize={'14px'}
                                cursor={'pointer'}
                                fontWeight={'bold'}
                                transition={'0.3s'}
                                padding={'5px 30px'}
                                borderRadius={'15px'}
                                color={'white'}
                                backgroundColor={'green'}
                                _hover={{ backgroundColor: 'home.button.hoverBackground', color: 'home.button.hoverText' }}>Save</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}
