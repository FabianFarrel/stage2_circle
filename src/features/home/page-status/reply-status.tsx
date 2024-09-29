import { Box, Button, Image, Textarea } from "@chakra-ui/react";
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
                color={'home.text'}
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
                        src='' />

                    <Textarea
                        rows={1}
                        ms={'13px'}
                        width={'300px'}
                        border={'none'}
                        resize={'none'}
                        fontSize={'14px'}
                        color={'white'}
                        fontWeight={'bold'}
                        {...register('content')}
                        placeholder="Type your reply!"
                    />
                </Box>

                <Box display={'flex'}>
                    {}

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
                        color={'white'}
                        backgroundColor={'green'}
                        _hover={{ backgroundColor: 'home.button.hoverBackground', color: 'home.button.hoverText' }}>Reply</Button>
                </Box>
            </Box>
        </form>
    )
}