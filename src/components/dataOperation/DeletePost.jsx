

import React, { useState } from "react";
import {
    useGetPostsQuery,
    useDeletePostMutation,
} from "../../redux/slice/apiSlice";

export default function DeletePost() {
    const { data: posts = [], isLoading, isError } = useGetPostsQuery();
    const [deletePost, { isLoading: isDeleting }] =
        useDeletePostMutation();
    const [deletingId, setDeletingId] = useState(null);

    const handleDelete = async (id) => {
        try {
            setDeletingId(id);
            await deletePost(id);
        } finally {
            setDeletingId(null);
        }
    };

    const pageStyle = {
        padding: "5% 25%",
        fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
    };

    const cardStyle = {
        background: "white",
        color: "#0f172a",
        padding: "16px",
        borderRadius: "12px",
        marginBottom: "12px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
    };

    const titleStyle = {
        margin: "0 0 6px",
        fontSize: "16px",
    };

    const bodyStyle = {
        margin: "0 0 10px",
        fontSize: "14px",
        color: "#475569",
    };

    const buttonStyle = {
        padding: "6px 10px",
        border: "none",
        borderRadius: "8px",
        background: "#ef4444",
        color: "white",
        cursor: "pointer",
        fontSize: "12px",
    };

    if (isLoading) return <div style={pageStyle}>Loading posts...</div>;
    if (isError) return <div style={pageStyle}>Failed to load posts.</div>;

    return (
        <div style={pageStyle}>

            {posts.map((post) => (
                <div key={post.id} style={cardStyle}>
                    <h3 style={titleStyle}>{post.title}</h3>
                    <p style={bodyStyle}>{post.body}</p>

                    <button
                        style={{
                            ...buttonStyle,
                            opacity: isDeleting && deletingId === post.id ? 0.6 : 1,
                        }}
                        onClick={() => handleDelete(post.id)}
                        disabled={isDeleting && deletingId === post.id}
                    >
                        {isDeleting && deletingId === post.id ? "Deleting..." : "Delete"}
                    </button>
                </div>
            ))}
        </div>
    );
}
