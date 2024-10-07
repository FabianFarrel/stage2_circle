import { useState, useEffect } from "react";
import { Box, Image, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import FollowButton from "../buttons/follow";
import { ButtonLink } from "../buttons/link";
import { useAllUsers } from "../hooks/use-all";

interface User {
  id: number;
  fullName: string;
  userName: string;
  profileImageUrl: string;
  isFollowing: boolean;
}

interface UserEntity {
  id: number;
  fullName?: string;
  userName?: string;
  profileImageUrl?: string;
}

function mapToUser(userEntity: UserEntity): User {
  return {
    id: userEntity.id,
    fullName: userEntity.fullName || "Unknown User",
    userName: userEntity.userName || "unknown",
    profileImageUrl: userEntity.profileImageUrl || "",
    isFollowing: false,
  };
}

export function Follows() {
  const { data } = useAllUsers();
  const [followers, setFollowers] = useState<User[]>([]);
  const [following, setFollowing] = useState<User[]>([]);

  useEffect(() => {
    if (data) {
      const mappedUsers = data.map(mapToUser);
      const followersList = mappedUsers.filter((user) => !user.isFollowing);
      const followingList = mappedUsers.filter((user) => user.isFollowing);

      setFollowers(followersList);
      setFollowing(followingList);
    }
  }, [data]);

  // Render a user card
  const renderUser = (user: User) => (
    <Box
      key={user.id}
      mt="13px"
      bg="none"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" bg="none" alignItems="center">
        <Image
          alt={user.fullName}
          boxSize="40px"
          display="block"
          borderRadius="500px"
          src={user.profileImageUrl || ""}
        />

        <ButtonLink textDecoration="none" state={user.id} to={`/profile-people/${user.id}`} bg="none">
          <Text
            ms="10px"
            color="white"
            fontSize="12px"
            fontWeight="bold"
            transition="color 0.2s ease-in-out"
            _hover={{ color: "nav.button.hoverText" }}
          >
            {user.fullName}
            <Text fontSize="10px" color="nav.link">@{user.userName}</Text>
          </Text>
        </ButtonLink>
      </Box>
      <Box bg="none" color="white">
        <FollowButton userId={user.id} />
      </Box>
    </Box>
  );

  return (
    <Tabs color="white" isFitted>
      <TabList>
        <Tab
          _selected={{ color: "green.500", borderColor: "green.500" }} 
        >
          Followers
        </Tab>
        <Tab
          _selected={{ color: "green.500", borderColor: "green.500" }} 
        >
          Following
        </Tab>
      </TabList>

      <TabPanels>
        {/* Followers Tab */}
        <TabPanel>
          {followers.length > 0 ? (
            followers.map((user) => renderUser(user))
          ) : (
            <Text color="gray.500">No followers found</Text>
          )}
        </TabPanel>

        {/* Following Tab */}
        <TabPanel>
          {following.length > 0 ? (
            following.map((user) => renderUser(user))
          ) : (
            <Text color="gray.500">No following found</Text>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Follows;
