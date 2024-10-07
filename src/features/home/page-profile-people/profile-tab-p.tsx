import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ProfilePostPeople } from "./profile-item-p";
import { ProfileMediaPeople } from "./profile-media-p";

export function ProfileTabsPeople() {
    return (
        <Box
            mt={'20px'}
            px={'25px'}
            pb={'15px'}
            alignItems={'left'} // Changed from center to left for consistency
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
                        color={'home.text'} // Changed to match styling
                        _hover={{ color: 'home.hoverText' }}
                        transition={'all 0.2s'}
                        _selected={{ color: 'green.500' }} // Added selected state for consistency
                    >
                        All Post
                    </Tab>
                    <Tab
                        w={'50%'}
                        cursor={'pointer'}
                        py={'3px'}
                        border={'none'}
                        color={'home.text'} // Changed to match styling
                        _hover={{ color: 'home.hoverText' }}
                        transition={'all 0.2s'}
                        _selected={{ color: 'green.500' }} // Added selected state for consistency
                    >
                        Media
                    </Tab>
                </TabList>

                <TabIndicator
                    height='2px'
                    bg='green.500' // Changed to match styling
                    borderRadius='1px'
                    mt='-1px' // Added margin to adjust position
                />

                <TabPanels>
                    <TabPanel width={'100%'}>
                        <ProfilePostPeople />
                    </TabPanel>
                    <TabPanel>
                        <ProfileMediaPeople />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}
