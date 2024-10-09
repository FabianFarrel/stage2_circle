import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ProfilePostPeople } from "./profile-item-p";
import { ProfileMediaPeople } from "./profile-media-p";

export function ProfileTabsPeople() {
    return (
        <Box
            mt={'20px'}
            px={'25px'}
            pb={'15px'}
            alignItems={'left'}
        >
            <Tabs variant={'unstyled'} position='relative'>
                <TabList
                    pb={'13px'}
                    display={'flex'}
                    color={'white'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderBottom={'1px solid #3F3F3F'}
                >
                    <Tab
                        w={'50%'}
                        cursor={'pointer'}
                        py={'3px'}
                        border={'none'}
                        color={'home.text'}
                        _hover={{ color: 'home.hoverText' }}
                        transition={'all 0.2s'}
                        _selected={{ color: 'green.500' }}
                        aria-label="All Posts Tab"
                    >
                        All Posts
                    </Tab>
                    <Tab
                        w={'50%'}
                        cursor={'pointer'}
                        py={'3px'}
                        border={'none'}
                        color={'home.text'}
                        _hover={{ color: 'home.hoverText' }}
                        transition={'all 0.2s'}
                        _selected={{ color: 'green.500' }}
                        aria-label="Media Tab"
                    >
                        Media
                    </Tab>
                </TabList>

                <TabIndicator
                    height='2px'
                    bg='green.500'
                    borderRadius='1px'
                    mt='-1px'
                />

                <TabPanels>
                    <TabPanel width={'100%'} key="posts">
                        <ProfilePostPeople />
                    </TabPanel>
                    <TabPanel key="media">
                        <ProfileMediaPeople />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}
