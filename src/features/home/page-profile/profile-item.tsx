import { Box, Button, Heading, Image, Text, useDisclosure } from "@chakra-ui/react";
import { FaComments } from "react-icons/fa";
import { useFetchPosts } from "../hooks/use-fetch";  
import { ButtonLink } from "../buttons/link";
import { PostModal } from "../modal/post-modal";
import LikeButtonPost from "../buttons/like";
import React from "react";

export function ProfilePost() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    // Use the new hook to fetch posts
    const { data, isLoading, error } = useFetchPosts();

    if (isLoading) {
        return <Heading color="white">Loading posts...</Heading>;
    }

    if (error) {
        return <Heading color="red">Failed to load posts.</Heading>;
    }

    if (!data || data.length === 0) {
        return (
            <Box justifyContent={'center'} display={'flex'} alignItems={'center'} flexDirection={'column'} mt={'30px'} pb={'15px'}>
                <Heading as={'text'} color={'white'} fontSize={'15px'}>I think you don't have any posts yet</Heading>
                <Button
                    border={'none'}
                    height={'35px'}
                    onClick={onOpen}
                    color={'white'}
                    fontSize={'15px'}
                    cursor={'pointer'}
                    fontWeight={'bold'}
                    borderRadius={'20px'}
                    backgroundColor='transparent'
                    transition={'all 0.2s ease-in-out'}
                    _hover={{ color: 'nav.button.hoverText' }}>
                    Let's make your first post
                </Button>

                <PostModal
                    isOpen={isOpen}
                    onClose={onClose}
                    initialRef={initialRef}
                    finalRef={finalRef}
                />
            </Box>
        );
    }

    return (
        <>
            {data?.map((post) => {
                return (
                    <Box
                        key={post.id}
                        mt={'20px'}
                        pb={'15px'}
                        display={'flex'}
                        color={'#FFFFFF'}
                        alignItems={'center'}
                        borderBottom={'1px solid #3F3F3F'}>
                        <Box display={'flex'}>
                            <Image
                                alt='Profile picture'
                                boxSize='40px'
                                borderRadius='500px'
                                src={post.author.image} />

                            <Box ms={'10px'}>
                                <Text fontSize={'12px'} fontWeight={'bold'}>
                                    {post.author.fullName}
                                    <Text as={'span'} color={'#909090'} ms={'3px'}>@{post.author.userName} • {post.timeAgo}</Text>
                                </Text>
                                <Text fontSize={'12px'} mt={'5px'}>{post.content}</Text>

                                {post.image && (
                                    <Image
                                        src={post.image}
                                        alt="Post Image"
                                        boxSize="200px"
                                        objectFit="cover"
                                        mt="10px"
                                        borderRadius="8px"
                                    />
                                )}

                                <Text display={'flex'} alignItems={'center'} mt={'15px'} fontSize={'20px'}>
                                    <LikeButtonPost postId={post.id} />
                                    <Text as={'span'} ms={'5px'} color={'white'} fontSize={'12px'}>{post.likesCount}</Text>
                                    <FaComments style={{ color: '#909090', marginLeft: '20px' }} />
                                    <ButtonLink to={`/status/${post.id}`} display={'flex'}>
                                        <Text
                                            ms={'5px'}
                                            as={'span'}
                                            color={'home.link'}
                                            fontSize={'12px'}>{post.repliesCount} Replies</Text>
                                    </ButtonLink>
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                );
            })}
        </>
    );
}
