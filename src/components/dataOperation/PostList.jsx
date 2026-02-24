// src/features/posts/PostsList.js
import React from 'react';
import { useGetPostsQuery } from '../../redux/slice/apiSlice';

export function PostsList({
  cardStyle,
  containerStyle,
  titleStyle,
  textStyle
}) {
  const { data: posts, isLoading, isSuccess, isError, error } = useGetPostsQuery();

  let content;
  if (isLoading) {
    content = <span>Loading...</span>;
  } else if (isSuccess) {
    content = (
      <ul>
        {posts.map((post) => (
          <div key={post.id} style={cardStyle}>
                  <div style={containerStyle}>
                    <h1 style = {titleStyle}>{post.name}</h1>
                    <h2 style={titleStyle}>{post.title}</h2>
                    <h6 style={textStyle}>Post ID: {post.postId}</h6>
                    <p style={textStyle}>{post.body}</p>
                  </div>
                </div>
        ))}
      </ul>
    );
  } else if (isError) {
    content = <div>Error: {error.message}</div>;
  }

  return <div className="posts-list">{content}</div>;
}

