import { Box } from "@chakra-ui/react";
import { DetailReply } from "./reply-detail";
import { DetailItem } from "./item-detail";
import { DetailPost } from "./post-detail";

interface DetailRightNavbarProps {
    selectedPostId: number | null;
}

export function DetailRightNavbar({ selectedPostId }: DetailRightNavbarProps) {
    return (
        <Box>
            <DetailPost  selectedPostId={selectedPostId}/>
            <DetailReply selectedPostId={selectedPostId}/>
            <DetailItem selectedPostId={selectedPostId} />
        </Box>
    )
}