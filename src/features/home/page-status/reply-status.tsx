import { Box, Button, Input, Image } from "@chakra-ui/react";
import { useReplyForm } from "../hooks/use-reply";


export function StatusReply() {
    const { register, handleSubmit, onSubmit } = useReplyForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box
                mt={'20px'}
                px={'25px'}
                pb={'20px'}
                display={'flex'}
                color={'white'}
                alignItems={'center'}
                justifyContent={'space-between'}
                borderBottom={'1px solid #3F3F3F'}>
                <Box
                    display={'flex'}
                    alignItems={'center'}>
                    <Image
                        alt=''
                        top={'115px'}
                        left={'30px'}
                        boxSize='40px'
                        display={'block'}
                        borderRadius='500px'
                        src='https://images.unsplash.com/photo-1667053508464-eb11b394df83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' />

                    <Input
                        type='text'
                        ms={'13px'}
                        border={'none'}
                        width={'300px'}
                        height={'25px'}
                        fontSize={'14px'}
                        color={'home.text'}
                        fontWeight={'bold'}
                        {...register('content')}
                        placeholder="Type your reply!"
                        _focusVisible={{
                            borderColor: "transparent",
                        }}
                        _hover={{
                            borderColor: "transparent",
                        }} />
                </Box>

                <Box display={'flex'}>
                    <Button
                        type='submit'
                        border={'none'}
                        height={'30px'}
                        fontSize={'14px'}
                        cursor={'pointer'}
                        transition={'0.3s'}
                        fontWeight={'bold'}
                        padding={'5px 30px'}
                        borderRadius={'15px'}
                        color={'home.button.text'}
                        backgroundColor={'green'}
                        _hover={{ backgroundColor: 'home.button.hoverBackground', color: 'home.button.hoverText' }}>Reply</Button>
                </Box>
            </Box>
        </form>
    )
}