import { Text } from "@chakra-ui/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ProfileStatusPeople } from "../page-profile-people/profile-status-p";
import { ProfileTabsPeople } from "../page-profile-people/profile-tab-p";
import { ButtonLink } from "../buttons/link";

export function ProfilePeopleLayout() {
    return(
        <>
            <ButtonLink to={"/"} textDecoration={'none'}>
            <Text
                as={'h2'}
                mt={'15px'} 
                px={'25px'}
                display={'flex'}
                color={'white'}
                alignItems={'center'}>
                <IoIosArrowRoundBack style={{marginRight:'5px', fontSize:'30px'}}/>✨ Fabian ✨</Text>
            </ButtonLink>

            <ProfileStatusPeople/>
            <ProfileTabsPeople/>
        </>
    )
}