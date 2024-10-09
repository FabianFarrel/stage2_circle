import { useQueryClient, QueryKey } from '@tanstack/react-query'; 
import Cookies from 'js-cookie';
import React, { useEffect, useState } from "react";
import { apiV1 } from "../../../libs/api";
import { ButtonLink } from "./link";

interface FollowButtonProps {
    userId: number;
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId }) => {
    const [__isFollow, setIsFollow] = React.useState(false);
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
                setButtonText(response.data.isFollowing ? "Unfollow" : "Follow");
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
            setButtonText(newFollowStatus ? "Unfollow" : "Follow");

            // Invalidate queries related to followers/following
            const followingQueryKey: QueryKey = ['following', userId];
            queryClient.invalidateQueries({ queryKey: followingQueryKey });

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
