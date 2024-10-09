import { Box, Heading, Image, useDisclosure } from "@chakra-ui/react";
import { usePostProfile } from "../hooks/use-profile";
import React, { useState } from "react";
import { DetailLayout } from "../layouts/layout-detail";

export function ProfileMediaPeople() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const { data } = usePostProfile();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
    
    if (!data || data.length === 0) {
        return (
            <Box justifyContent={'center'} display={'flex'} alignItems={'center'} flexDirection={'column'} mt={'30px'} pb={'15px'}>
                <Heading as='h2' color={'white'} fontSize={'15px'}>
                    I think this user doesn't have any posts yet
                </Heading>
            </Box>
        );
    }

    return (
        <Box
            mt={'20px'}
            pb={'15px'}
            display={'flex'}
            color={'#FFFFFF'}
            justifyContent={'left'}
            alignItems={'center'}
        >
            <Box
                display={'flex'}
                flexWrap={'wrap'}
                justifyContent={'left'}
                width={'1000px'}
                gap={'5px'}
            >
                {data.map((post) => {
                    return (
                        post.image && (
                            <Image
                                key={post.id}
                                boxSize='155px'
                                onClick={() => {
                                    setSelectedImage(post.image as string | null);
                                    setSelectedPostId(post.id);
                                    onOpen();
                                }}
                                objectFit='cover'
                                src={post.image}
                                alt={`Post by ${post.author?.fullName} with ID ${post.id}`} // Provide meaningful alt text
                            />
                        )
                    );
                })}
            </Box>
            <DetailLayout
                isOpen={isOpen}
                onClose={onClose}
                initialRef={initialRef}
                finalRef={finalRef}
                selectedImage={selectedImage}
                selectedPostId={selectedPostId}
            />
        </Box>
    );
}
