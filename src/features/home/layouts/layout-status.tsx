import { Text } from "@chakra-ui/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { HomeItem } from "../home-page/home-item";
import { StatusItem } from "../page-status/item-status";
import { StatusReply } from "../page-status/reply-status";
import { ButtonLink } from "../buttons/link";

export function LayoutStatus() {
    return (
        <>
            <ButtonLink to={"/"}>
                <Text
                    as={'h2'}
                    px={'25px'}
                    mt={'15px'}
                    width={'50%'}
                    display={'flex'}
                    color={'grey'}
                    transition={'0.3s'}
                    alignItems={'center'}
                    _hover={{color: 'home.hoverText'}}>
                    <IoIosArrowRoundBack style={{ marginRight: '5px', fontSize: '30px' }} />Status</Text>
            </ButtonLink>

            <StatusItem />
            <StatusReply />
            <HomeItem />
        </>
    )
}