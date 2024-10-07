import { useQueryClient, QueryKey } from '@tanstack/react-query'; 
import Cookies from 'js-cookie';
import React, { useEffect, useState } from "react";
import { apiV1 } from "../../../libs/api";
import { ButtonLink } from "./link";

interface FollowButtonProps {
    userId: number;
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId }) => {
    const [isFollow, setIsFollow] = React.useState(false);
    const [buttonText, setButtonText] = useState<string>("Follow");

    const queryClient = useQueryClient();

    useEffect(() => {
        const fetchFollow = async () => {
            try {
                const response = await apiV1.get(`/follow/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("token")}`,
                    },
                });

                setIsFollow(response.data.isFollowing);
                setButtonText(response.data.isFollowing ? "Following" : "Follow");
            } catch (error) {
                console.error("Error fetching follow status:", error);
            }
        };

        fetchFollow();
    }, [userId]);

    const handleFollow = async () => {
        try {
            const response = await apiV1.patch(
                `/follow/${userId}`, 
                {}, 
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("token")}`,
                    },
                }
            );
            const newFollowStatus = response.data.isFollowing;

            setIsFollow(newFollowStatus);
            setButtonText(newFollowStatus ? "Following" : "Follow");

            // Define query filters explicitly
            const userQueryKey: QueryKey = ['user', userId];
            const followStatusQueryKey: QueryKey = ['follow-status', userId];

            // Invalidate queries with correct key
            queryClient.invalidateQueries({ queryKey: userQueryKey });
            queryClient.invalidateQueries({ queryKey: followStatusQueryKey });

        } catch (error) {
            console.error("Error toggling follow status:", error);
        }
    };

    return (
        <ButtonLink
            to={''}
            height={'28px'}
            fontSize={'11px'}
            bg={'transparent'}
            color={'white'}
            fontWeight={'700'}
            padding={'5px 13px'}
            onClick={handleFollow}
            borderRadius={'20px'}
            border={'1px solid #FFFFFF'}
        >
            {buttonText}
        </ButtonLink>
    );
};

export default FollowButton;
