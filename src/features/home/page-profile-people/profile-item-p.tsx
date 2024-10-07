import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { FaComments } from "react-icons/fa";
import LikeButton from "../buttons/like";
import { ButtonLink } from "../buttons/link";
import { usePostProfile } from "../hooks/use-profile";

export function ProfilePostPeople() {
    const { data } = usePostProfile();

    if (!data || data.length === 0) {
        return <Box justifyContent={'center'} display={'flex'} alignItems={'center'} flexDirection={'column'} mt={'30px'} pb={'15px'}>
            <Heading as={'text'} color={'white'} fontSize={'15px'}>I think this user dont have any post yet</Heading>
        </Box>
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
                        alignItems={'center'}>
                        <Box
                            display={'flex'}>
                            <Image
                                alt=''
                                boxSize='40px'
                                borderRadius='500px'
                                src='https://images.unsplash.com/photo-1667053508464-eb11b394df83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' />

                            <Box ms={'10px'}>
                                <Text fontSize={'12px'} fontWeight={'bold'}>{post.author.fullName} <Text as={'span'} color={'#909090'} ms={'3px'}>@{post.author.userName} • 4h</Text></Text>
                                <Text fontSize={'12px'} mt={'5px'}>{post.content}</Text>
                                <Text display={'flex'} alignItems={'center'} mt={'15px'} fontSize={'20px'}>
                                    <Text
                                        mt={'15px'}
                                        display={'flex'}
                                        fontSize={'20px'}
                                        alignItems={'center'}>
                                        <LikeButton postId={post.id} />
                                        <Text
                                            as={'span'}
                                            color={'home.link'}
                                            fontSize={'12px'}>{post.likesCount}</Text>

                                        <FaComments style={{ color: '#909090', marginLeft: '20px' }} />
                                        <ButtonLink state={post.id} to={`/status/${post.id}`} display={'flex'}>
                                            <Text
                                                ms={'5px'}
                                                as={'span'}
                                                color={'home.link'}
                                                fontSize={'12px'}>{post.repliesCount} Replies</Text>
                                        </ButtonLink>
                                    </Text>
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
        </>
    )
}