import { Text } from "@chakra-ui/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { StatusItem } from "../page-status/item-status";
import { StatusPost } from "../page-status/post-status";
import { StatusReply } from "../page-status/reply-status";
import { ButtonLink } from "../buttons/link";
import { useNavigate } from "react-router-dom";

export function LayoutStatus() {
    const navigate = useNavigate();
    
    return (
        <>
            <ButtonLink onClick={() => navigate(-1)} to={""}>
                <Text
                    as={'h2'}
                    px={'25px'}
                    mt={'15px'}
                    width={'50%'}
                    display={'flex'}
                    color={'white'}
                    transition={'0.3s'}
                    alignItems={'center'}
                    _hover={{ color: 'home.hoverText' }}>
                    <IoIosArrowRoundBack style={{ marginRight: '5px', fontSize: '30px' }} />
                    Status
                </Text>
            </ButtonLink>

                <>
                    <StatusPost />
                    <StatusReply  />
                    <StatusItem  />
                </>
        </>
    );
}