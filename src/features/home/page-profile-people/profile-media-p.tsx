import { Box, Image } from "@chakra-ui/react";


export function ProfileMediaPeople() {
    return (
        <Box
            mt={'20px'} 
            pb={'15px'}
            display={'flex'} 
            color={'#FFFFFF'} 
            justifyContent={'center'}
            alignItems={'center'}>
            <Box 
                display={'flex'}
                flexWrap={'wrap'}
                justifyContent={'center'}
                width={'1000px'}
                gap={'5px'}>
                <Image
                    boxSize='150px'
                    objectFit='cover'
                    src=''
                    alt=''/>
                <Image
                    boxSize='150px'
                    objectFit='cover'
                    src=''
                    alt=''/>
                <Image
                    boxSize='150px'
                    objectFit='cover'
                    src=''
                    alt=''/>
                
                </Box>
            </Box>
    )
}