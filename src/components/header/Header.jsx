import React from 'react'
const Header = ({
    handleTodo,
    handleAlbum,
    handlePhoto,
    handlePost,
    handleUser,
    handlePostList,
    handleAddPost,
    handleUpdatePost,
    handleDeletePost,
    getButtonColor,
    buttonStyle
}) => {
    return (
        <>
            <nav style={{ backgroundColor: "#333", padding: "10px" }}>
                <h1 style={{ color: "#fff", margin: 0 }}>Redux Toolkit Practice</h1>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <button
                        style={{ ...buttonStyle, backgroundColor: getButtonColor("todos") }}
                        onClick={handleTodo}
                    >
                        Fetch Todos
                    </button>

                    <button
                        style={{ ...buttonStyle, backgroundColor: getButtonColor("posts") }}
                        onClick={handlePost}
                    >
                        Fetch Posts
                    </button>

                    <button
                        style={{ ...buttonStyle, backgroundColor: getButtonColor("albums") }}
                        onClick={handleAlbum}
                    >
                        Fetch Albums
                    </button>

                    <button
                        style={{ ...buttonStyle, backgroundColor: getButtonColor("photos") }}
                        onClick={handlePhoto}
                    >
                        Fetch Photos
                    </button>

                    <button
                        style={{ ...buttonStyle, backgroundColor: getButtonColor("users") }}
                        onClick={handleUser}
                    >
                        Fetch Users
                    </button>

                    <button style={{ ...buttonStyle, backgroundColor: getButtonColor("postList") }}
                        onClick={handlePostList}>
                        Post List (RTK Query)
                    </button>

                    <button style={{ ...buttonStyle, backgroundColor: getButtonColor("addPost") }}
                        onClick={handleAddPost}>
                        Create List (RTK Query)
                    </button>

                    <button style={{ ...buttonStyle, backgroundColor: getButtonColor("updatePost") }}
                        onClick={handleUpdatePost}>
                        Update Post(RTK Query)
                    </button>

                    <button
                    style={{ ...buttonStyle, backgroundColor: getButtonColor("deletepost") }}
                        onClick={handleDeletePost}>
                            Delete Post (RTK Query)
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header