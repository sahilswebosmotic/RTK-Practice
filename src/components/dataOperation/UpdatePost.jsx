import { useState, useEffect } from "react";
import {
    useGetUpdatePostQuery,
    useUpdatePostMutation,
} from "../../redux/slice/apiSlice";

export default function UpdatePost() {

    const { data: post, isLoading: isFetching } = useGetUpdatePostQuery();

    const [updatePost, { isLoading, isSuccess, error, data }] =
        useUpdatePostMutation();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        const handlePost = ()=>{
        if (post) {
            setTitle(post.title);
            setBody(post.body);
        }
    }
    handlePost();
    }, [post]);

    const handleUpdate = async () => {
        if (!title.trim() || !body.trim()) {
            alert("Fields cannot be empty");
            return;
        }

        await updatePost({
            id: 1,
            title,
            body,
            userId: post.userId,
        });
    };


    const pageStyle = {
        marginTop:'10vh',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    };

    const cardStyle = {
        width: "380px",
        borderRadius: "14px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        backgroundColor: "#ffffff",
        padding: "22px",
    };

    const titleStyle = {
        margin: "0 0 18px 0",
        fontSize: "22px",
        fontWeight: "600",
        textAlign: "center",
        color: "#0f172a",
    };

    const inputStyle = {
        width: "100%",
        padding: "12px 14px",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "1px solid #e2e8f0",
        fontSize: "14px",
        outline: "none",
        boxSizing: "border-box",
    };

    const textareaStyle = {
        ...inputStyle,
        minHeight: "90px",
        resize: "none",
    };

    const buttonStyle = {
        width: "100%",
        padding: "12px",
        backgroundColor: isLoading ? "#a5b4fc" : "#0ea5e9",
        color: "#ffffff",
        border: "none",
        borderRadius: "10px",
        fontSize: "14px",
        fontWeight: "600",
        cursor: isLoading ? "not-allowed" : "pointer",
        transition: "0.2s ease",
    };

    const messageStyle = {
        marginTop: "14px",
        fontSize: "14px",
        textAlign: "center",
    };

    const responseStyle = {
        marginTop: "16px",
        backgroundColor: "#0f172a",
        color: "#e2e8f0",
        padding: "10px",
        borderRadius: "10px",
        fontSize: "12px",
        overflowX: "auto",
    };

    if (isFetching) {
        return <div style={pageStyle}>Loading post...</div>;
    }

    return (
        <div style={pageStyle}>
            <div style={cardStyle}>
                <h2 style={titleStyle}>Update Post</h2>

                <input
                    style={inputStyle}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    style={textareaStyle}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <button style={buttonStyle} onClick={handleUpdate} disabled={isLoading}>
                    {isLoading ? "Updating..." : "Update Post"}
                </button>

                {isSuccess && (
                    <p style={{ ...messageStyle, color: "#16a34a" }}>
                        Post updated successfully
                    </p>
                )}

                {error && (
                    <p style={{ ...messageStyle, color: "#dc2626" }}>Update failed</p>
                )}

                {data && (
                    <pre style={responseStyle}>{JSON.stringify(data, null, 2)}</pre>
                )}
            </div>
        </div>
    );
}
