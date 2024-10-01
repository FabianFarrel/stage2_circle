import { Box, Image, Text } from "@chakra-ui/react";
import { FaComments } from "react-icons/fa";
import { ButtonLink } from "../buttons/link";
import LikeButton from "../buttons/like";
import { useAllPosts } from "../hooks/use-all";

export function HomeItem() {
    const { data } = useAllPosts();

    return (
        <>
            {data?.map((post) => {
                return (
                    <Box
                        mt={'20px'}
                        px={'25px'}
                        pb={'15px'}
                        key={post.id}
                        color={'home.text'}
                        alignItems={'center'}
                        borderBottom={'1px solid #3F3F3F'}>
                        <Box
                            display={'flex'}>
                            <Image
                                alt=''
                                boxSize='40px'
                                borderRadius='500px'
                                src='https://images.unsplash.com/photo-1667053508464-eb11b394df83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' />

                            <Box ms={'10px'}>
                                <Text
                                    fontSize={'12px'}
                                    color={'white'}
                                    fontWeight={'bold'}>{post.author.fullName}
                                    <Text
                                        as={'span'}
                                        color={'white'}
                                        ms={'3px'}>@{post.author.userName} • {post.timeAgo}</Text>
                                </Text>

                                <Text
                                    fontSize={'12px'}
                                    color={'white'}
                                    mt={'5px'}>{post.content}</Text>

{post.image !== null && (
    <Image 
        src={post.image}
        alt="Post Image"
        borderRadius="md" 
        boxSize="300px" 
        objectFit="cover" 
        margin="10px auto" 
        boxShadow="lg" 
        transition="transform 0.2s" 
        
    />
)}

                                <Text
                                    mt={'15px'}
                                    display={'flex'}
                                    fontSize={'20px'}
                                    alignItems={'center'}>
                                    <LikeButton postId={post.id}  />
                                    <Text
                                        as={'span'}
                                        mb={'1px'}
                                        
                                        color={'white'}
                                        fontSize={'12px'}>{post.likesCount}</Text>

                                    <FaComments style={{ color: '#909099', marginLeft: '20px',marginBottom:'5px',marginTop:'5px' }} />
                                    <ButtonLink state={post.id} to={`/status/${post.id}`} display={'flex'}>
                                        <Text
                                            mb={'1px'}
                                            
                                            ms={'5px'}
                                            as={'span'}
                                            color={'white'}
                                            fontSize={'12px'}>{post.repliesCount} Replies</Text>
                                    </ButtonLink>
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
        </>
    )
}