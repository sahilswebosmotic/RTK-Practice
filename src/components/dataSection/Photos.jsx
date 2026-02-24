import React from 'react'

const Photos = ({
  state,
  cardStyle,
  containerStyle,
  textStyle,
  titleStyle
}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {state.photos.data && state.photos.data.length > 0 ? (
        state.photos.data.map((photo) => (
          <div key={photo.id} style={cardStyle}>
            <div style={containerStyle}>
              <h6 style={textStyle}>Album ID: {photo.albumId}</h6>
              <h2 style={titleStyle}>{photo.title}</h2>
            </div>
          </div>
        ))
      ) : (
        <p style={{ fontSize: "18px", color: "#999", marginTop: "50px" }}>
          Click "Fetch Photos" to load data
        </p>
      )}
    </div>
  )
}

export default Photos