import React from 'react'

const Post = ({
  state,
  cardStyle,
  containerStyle,
  titleStyle,
  textStyle
}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {state.post.data && state.post.data.length > 0 ? (
              state.post.data.map((post) => (
                <div key={post.id} style={cardStyle}>
                  <div style={containerStyle}>
                    <h2 style={titleStyle}>{post.title}</h2>
                    <h6 style={textStyle}>User ID: {post.userId}</h6>
                    <p style={textStyle}>{post.body}</p>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ fontSize: "18px", color: "#999", marginTop: "50px" }}>
                Click "Fetch Posts" to load data
              </p>
            )}
          </div>
  )
}

export default Post