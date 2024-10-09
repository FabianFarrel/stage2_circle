import { UserEntity } from "./user"; // Assuming UserEntity is defined in user.ts

export interface FollowEntity {
  id: number;                // Unique ID for the follow relationship
  followerId: number;       // ID of the user who is following
  followingId: number;      // ID of the user being followed
  follower: UserEntity;     // The follower's user entity
  following: UserEntity;    // The followed user's entity
  createdAt: Date;          // Timestamp when the follow relationship was created
  updatedAt: Date;          // Timestamp when the follow relationship was last updated
  isFollowing: boolean;      // Indicates if the current user is following the target user
}
