import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { useAllUsersById } from "../hooks/use-all";
import { ButtonLink } from "../buttons/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import FollowButton from "../buttons/follow";

export function ProfileStatusPeople() {
    const { data } = useAllUsersById();
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();

    return (
        <>
            <ButtonLink to={""} onClick={() => navigate(-1)} textDecoration={'none'}>
                <Text
                    as={'h2'}
                    mt={'15px'}
                    px={'25px'}
                    display={'flex'}
                    color={'white'}
                    alignItems={'center'}
                    transition={"color 0.2s ease-in-out"}
                    _hover={{ color: 'nav.button.hoverText' }}>
                    <IoIosArrowRoundBack style={{ marginRight: '5px', fontSize: '30px' }} /> {data?.fullName}
                </Text>
            </ButtonLink>
            <Box mt={'10px'} px={'25px'} alignItems={'center'}>
                <Image
                    width={'100%'}
                    height={'100px'}
                    display={'block'}
                    borderRadius='10px'
                    src={data?.background}
                />

                <HStack // Use HStack to align image and button
                    mt={'-35px'}
                    display={'flex'}
                    alignItems={'flex-start'} // Align items at the start
                    justifyContent={'space-between'}>
                    
                    <Image
                        alt=''
                        ms={'20px'}
                        boxSize='80px'
                        display={'block'}
                        borderRadius='500px'
                        border={'3px solid black'}
                        src={data?.image}
                    />

                    {/* Add marginTop to lower the Follow Button */}
                    <Box mt={14}>
                        <FollowButton userId={userId as any} />
                    </Box>
                </HStack>

                <Box mt={'10px'} color={'white'} bg={'transparent'}>
                    <Text fontSize="16px" fontWeight="bold" bg={'transparent'}>{data?.fullName}</Text>
                    <Text my={'1'} fontSize="13px" color={'#b8b8b8'} bg={'transparent'}>@{data?.userName}</Text>
                    <Text my="1" fontSize="13px" bg={'transparent'}>{data?.bio}</Text>

                    <HStack bg={'transparent'}>
                        <Text fontSize="13px" bg={'transparent'}>{data?.following}</Text>
                        <Text as={'span'} fontSize="13px" color={'#b8b8b8'} bg={'transparent'}> Following</Text>
                        <Text fontSize="13px" bg={'transparent'}>{data?.followers}</Text>
                        <Text fontSize="13px" as={'span'} color={'#b8b8b8'} bg={'transparent'}> Followers</Text>
                    </HStack>
                </Box>
            </Box>
        </>
    );
}
