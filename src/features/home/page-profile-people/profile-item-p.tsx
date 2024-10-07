import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { FaComments } from "react-icons/fa";
import LikeButton from "../buttons/like";
import { ButtonLink } from "../buttons/link";
import { usePostProfile } from "../hooks/use-profile";

export function ProfilePostPeople() {
    const { data } = usePostProfile();

    if (!data || data.length === 0) {
        return (
            <Box justifyContent={'center'} display={'flex'} alignItems={'center'} flexDirection={'column'} mt={'30px'} pb={'15px'}>
                <Heading as={'text'} color={'white'} fontSize={'15px'}>
                    I think this user doesn't have any posts yet
                </Heading>
            </Box>
        );
    }

    return (
        <>
            {data?.map((post) => {
                return (
                    <Box
                        mt={'20px'}
                        pb={'15px'}
                        key={post.id}
                        display={'flex'}
                        color={'#FFFFFF'}
                        alignItems={'center'}
                        borderBottom={'1px solid #3F3F3F'} // Adding a bottom border for separation
                    >
                        <Box display={'flex'}>
                            <Image
                                alt='Profile picture'
                                boxSize='40px'
                                borderRadius='500px'
                                src={post.author.image}
                            />

                            <Box ms={'10px'}>
                                <Text fontSize={'12px'} fontWeight={'bold'}>
                                    {post.author.fullName}
                                    <Text as={'span'} color={'#909090'} ms={'3px'}>
                                        @{post.author.userName} • 4h
                                    </Text>
                                </Text>
                                <Text fontSize={'12px'} mt={'5px'}>{post.content}</Text>

                                {/* Display the post image if available */}
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
                                    <LikeButton postId={post.id} />
                                    <Text as={'span'} ms={'5px'} color={'white'} fontSize={'12px'}>
                                        {post.likesCount}
                                    </Text>

                                    <FaComments style={{ color: '#909090', marginLeft: '20px' }} />
                                    <ButtonLink state={post.id} to={`/status/${post.id}`} display={'flex'}>
                                        <Text
                                            ms={'5px'}
                                            as={'span'}
                                            color={'home.link'}
                                            fontSize={'12px'}>
                                            {post.repliesCount} Replies
                                        </Text>
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
