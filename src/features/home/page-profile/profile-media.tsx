import { Box, Image, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { DetailLayout } from "../layouts/layout-detail";

export function ProfileMedia() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

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
                    onClick={onOpen}
                    objectFit='cover'
                    src='https://media.istockphoto.com/id/485131020/photo/green-vegetable-juice-on-rustic-wood-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=cdAcj93roABaOLpzVAyZ0LQ9Zut0FxjcHL4u3un0Ru4='
                    alt='fab'/>
                <Image
                    boxSize='150px'
                    onClick={onOpen}
                    objectFit='cover'
                    src='https://media.istockphoto.com/id/2060984408/photo/stack-of-colorful-books-education-background-back-to-school-book-hardback-colorful-books-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=XaNgmcQp2CuObYQYFtp2JoVFwBt-0OArVakn4D5RJZQ='
                    alt='books'/>
                <Image
                    boxSize='150px'
                    objectFit='cover'
                    src='https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D'
                    alt='food'/>
                
                </Box>
                <DetailLayout
                isOpen={isOpen}
                onClose={onClose}
                initialRef={initialRef}
                finalRef={finalRef} />
            </Box>
    )
}