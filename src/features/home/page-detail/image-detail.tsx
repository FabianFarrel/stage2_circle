import { Box, Image } from "@chakra-ui/react";

export function DetailImage() {
    return(
        <Box 
            mx={'auto'} 
            mt={'20px'} 
            pb={'20px'} 
            pe={'25px'}
            display={'flex'} 
            alignItems={'center'} 
            justifyContent={'center'}>
            <Image
                onClick={() => window.open("https://media.istockphoto.com/id/485131020/photo/green-vegetable-juice-on-rustic-wood-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=cdAcj93roABaOLpzVAyZ0LQ9Zut0FxjcHL4u3un0Ru4=")}
                cursor={'pointer'}
                width={'auto'}
                height={'auto'}
                src="https://media.istockphoto.com/id/485131020/photo/green-vegetable-juice-on-rustic-wood-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=cdAcj93roABaOLpzVAyZ0LQ9Zut0FxjcHL4u3un0Ru4=" />
        </Box>
    )
}