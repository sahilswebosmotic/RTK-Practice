import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./App.css";
import { fetchTodos } from "./redux/slice/todo";
import { fetchPosts } from "./redux/slice/post";
import { fetchAlbums } from "./redux/slice/albums";
import { fetchPhotos } from "./redux/slice/photos";
import { fetchUsers } from "./redux/slice/users";
import Header from "./components/header/Header";
import Todo from "./components/dataSection/Todo";
import Post from "./components/dataSection/Post";
import Albums from "./components/dataSection/Albums";
import Photos from "./components/dataSection/Photos";
import User from "./components/dataSection/user";
import { PostsList }  from "./components/dataOperation/PostList";
import AddPost from "./components/dataOperation/AddPost";
import UpdatePost from "./components/dataOperation/UpdatePost";
import DeletePost from "@components/dataOperation/DeletePost";

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const [currentPage, setCurrentPage] = useState("todos");

  const getButtonColor = (buttonName) => {
    if (currentPage === buttonName) {
      return "#0066cc";
    } else {
      return "#555";
    }
  };

  const buttonStyle = {
    margin: "10px",
    padding: "10px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };


  const cardStyle = {
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    transition: "0.3s",
    margin: "20px",
  };

  const containerStyle = {
    padding: "16px",
  };

  const titleStyle = {
    margin: "0 0 10px 0",
    fontSize: "20px",
    color: "#333",
  };

  const textStyle = {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.5",
  };


  const handleTodosClick = () => {
    setCurrentPage("todos");
    dispatch(fetchTodos());
  };


  const handlePostsClick = () => {
    setCurrentPage("posts");
    dispatch(fetchPosts());
  };

  const handleAlbumsClick = () => {
    setCurrentPage("albums");
    dispatch(fetchAlbums());
  };

  const handlePhotosClick = () => {
    setCurrentPage("photos");
    dispatch(fetchPhotos());
  }

  const handleUsersClick = () => {
    setCurrentPage("users");
    dispatch(fetchUsers());
  }

  const handlePostListClick = () => {
    setCurrentPage("postList");
  }

  const handleAddPostClick = () =>{
    setCurrentPage("addPost");
  }

  const handleUpdatePostClick = () =>{
    setCurrentPage("updatePost");
  } 

  const handleDeletePostClick = () =>{
    setCurrentPage("deletePost");
  }

  if (state.todo.isLoading || state.post.isLoading || state.album.isLoading || state.photos.isLoading || state.users.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header
        handleTodo={handleTodosClick}
        handleAlbum={handleAlbumsClick}
        handlePhoto={handlePhotosClick}
        handlePost={handlePostsClick}
        handleUser={handleUsersClick}
        handlePostList={handlePostListClick}
        handleAddPost = {handleAddPostClick}
        getButtonColor={getButtonColor}
        handleUpdatePost = {handleUpdatePostClick}
        handleDeletePost={handleDeletePostClick}
        buttonStyle={buttonStyle}
      />

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", minHeight: "400px" }}>

        {currentPage === "todos" && (
          <Todo
            state={state}
          />
        )}

        {currentPage === "posts" && (
          <Post
            state={state}
            cardStyle={cardStyle}
            containerStyle={containerStyle}
            textStyle={textStyle}
            titleStyle={titleStyle}
          />
        )}

        {currentPage === "albums" && (
          <Albums
            state={state}
            cardStyle={cardStyle}
            containerStyle={containerStyle}
            textStyle={textStyle}
            titleStyle={titleStyle}
          />
        )}

        {currentPage === "photos" && (
          <Photos
            state={state}
            cardStyle={cardStyle}
            containerStyle={containerStyle}
            textStyle={textStyle}
            titleStyle={titleStyle}
          />
        )}

        {currentPage === "users" && (
          <User
            state={state}
            cardStyle={cardStyle}
            containerStyle={containerStyle}
            textStyle={textStyle}
            titleStyle={titleStyle}
          />
        )}
        {currentPage === "postList" && (
          <div>
            <PostsList
              cardStyle={cardStyle}
              containerStyle={containerStyle}
              textStyle={textStyle}
              titleStyle={titleStyle}
            />
          </div>
        )}
        {currentPage === "addPost" && (
          <div>
          <AddPost/>
          </div>
        )}
        {currentPage === "updatePost" && (
          <div>
          <UpdatePost/>
          </div>
        )}
        {currentPage === "deletePost" && (
          <div>
          <DeletePost/>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
