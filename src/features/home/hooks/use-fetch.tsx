import { useQuery } from "@tanstack/react-query";
import { GetPostEntity } from '../../../entities/post';
import { apiV1 } from '../../../libs/api';
import { useAppSelector } from '../../../store/use-store';

export function useFetchPosts() {
    const { id: authorId } = useAppSelector((state) => state.auth);

    async function getPosts() {
        const response = await apiV1.get<null, { data: GetPostEntity[] }>(
            `/post/${authorId}`
        );
        return response.data;
    }

    const { data, isLoading, error } = useQuery<GetPostEntity[], Error>({
        queryKey: ['post', authorId],
        queryFn: getPosts,
    });

    return {
        data, 
        isLoading, 
        error
    };
}
