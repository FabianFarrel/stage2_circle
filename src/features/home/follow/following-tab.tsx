import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text, Button, Avatar, HStack, VStack, Image } from "@chakra-ui/react";
import { useState } from "react";

interface User {
  id: number;
  username: string;
  handle: string;
  bio: string;
  isFollowing: boolean;
}

const followersData = [
  {
    id: 1,
    username: "rach",
    handle: "@fortherAch",
    bio: "All for Jesus and the A #GoBraves",
    isFollowing: true,
  },
  {
    id: 2,
    username: "Ahmad Baghdadi",
    handle: "@ahmadbag",
    bio: "Author of Practical UI...",
    isFollowing: false,
  },
  {
    id: 3,
    username: "Camila González",
    handle: "@camilgon",
    bio: "Photographer, Editor",
    isFollowing: true,
  },
];

// Sample users for Following
const followingData = [
  {
    id: 4,
    username: "Matías Fernández",
    handle: "@marias",
    bio: "Product Designer",
    isFollowing: true,
  },
  {
    id: 5,
    username: "John Doe",
    handle: "@johndoe",
    bio: "Tech Enthusiast",
    isFollowing: true,
  },
  {
    id: 6,
    username: "Sarah Connor",
    handle: "@sconnor",
    bio: "AI Researcher",
    isFollowing: true,
  },
];

export function FollowsLayout() {
  const [followers] = useState<User[]>(followersData); // Followers data
  const [following] = useState<User[]>(followingData); // Following data

  const UserCard = ({ user }: { user: User }) => (
    <Box
      mt="13px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingY={3}
      borderBottom="1px solid #2D3748" 
    >
      <Box display="flex" alignItems="center">
        <Image
          alt={user.username}
          boxSize="40px"
          borderRadius="full"
          src="" 
          fallbackSrc="https://via.placeholder.com/40"
        />
        <Box ms="10px">
          <Text color="white" fontSize="12px" fontWeight="bold">
            {user.username}
          </Text>
          <Text fontSize="10px" color="gray.500">
            {user.handle}
          </Text>
          <Text fontSize="10px" color="gray.500">
            {user.bio}
          </Text>
        </Box>
      </Box>
      <Box>
        <Button
          height="28px"
          color="white"
          fontSize="10px"
          bg="transparent"
          fontWeight="700"
          padding="5px 13px"
          borderRadius="20px"
          border="1px solid #FFFFFF"
        >
          {user.isFollowing ? "Following" : "Follow"}
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box width="full" padding={3} >
      <Tabs>
        <TabList>
          <Tab color="white" ml='100px'>Followers</Tab>
          <Tab color="white" ml='300px'>Following</Tab>
        </TabList>

        <TabPanels>
          {/* Followers Tab */}
          <TabPanel>
            {followers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </TabPanel>

          {/* Following Tab */}
          <TabPanel>
            {following.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default FollowsLayout;
