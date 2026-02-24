import React from 'react'

const Albums = ({
    state,
    cardStyle,
    containerStyle,
    textStyle,
    titleStyle
}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {state.album.data && state.album.data.length > 0 ? (
              state.album.data.map((album) => (
                <div key={album.id} style={cardStyle}>
                  <div style={containerStyle}>
                    <h6 style={textStyle}>User ID: {album.userId}</h6>
                    <h2 style={titleStyle}>{album.title}</h2>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ fontSize: "18px", color: "#999", marginTop: "50px" }}>
                Click "Fetch Albums" to load data
              </p>
            )}
          </div>
  )
}

export default Albums