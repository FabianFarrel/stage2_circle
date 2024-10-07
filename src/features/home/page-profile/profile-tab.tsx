import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ProfilePost } from "./profile-item";
import { ProfileMedia } from "./profile-media";

export function ProfileTabs() {
    return (
        <Box
            mt={'20px'}
            px={'25px'}
            pb={'15px'}
            alignItems={'left'}>
            
            <Tabs variant={'unstyled'} position='relative'>
                <TabList 
                    pb={'13px'}
                    display={'flex'}
                    color={'white'}
                    alignItems={'center'} 
                    justifyContent={'center'}
                    borderBottom={'1px solid #3F3F3F'}>
                    
                    <Tab 
                        w={'50%'} 
                        cursor={'pointer'} 
                        py={'3px'} 
                        border={'none'} 
                        color={'home.text'} 
                        _hover={{ color: 'home.hoverText' }} 
                        transition={'all 0.2s'} 
                        _selected={{ color: 'green.500' }} 
                    >
                        All Post
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
                    <TabPanel width={'100%'}>
                        <ProfilePost />
                    </TabPanel>
                    <TabPanel>
                        <ProfileMedia />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}
