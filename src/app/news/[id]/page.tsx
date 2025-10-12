
import { getNewsById, getComments } from "@/app/admin/actions";
import { Suspense } from "react";
import { NewsDetailClient } from "./client";

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
    const postData = await getNewsById(params.id);
    
    if (!postData) {
        return <div className="p-12 text-center">Post not found.</div>;
    }
    
    const commentsData = await getComments(postData.id);
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NewsDetailClient post={postData} initialComments={commentsData} />
        </Suspense>
    );
}
