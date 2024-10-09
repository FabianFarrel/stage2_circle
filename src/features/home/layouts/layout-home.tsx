import { Text } from "@chakra-ui/react";
import { HomeItem } from "../home-page/home-item";
import { HomePost } from "../home-page/home-post";

export function HomeLayout() {
    return(
        <>
            <Text
                fontSize={'30px'}
                mt={'20px'} 
                mb={'15px'}
                px={'25px'} 
                color={'white'}><b>Home</b></Text>
            <HomePost />
            <HomeItem />
        </>
    )
}