import React from 'react'

const User = (
  {
    state,
    cardStyle,
    textStyle,
    containerStyle,
    titleStyle
  }
) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {state.users.data && state.users.data.length > 0 ? (
        state.users.data.map((user) => (
          <div key={user.id} style={cardStyle}>
            <div style={containerStyle}>
              <p style={textStyle}>ID: {user.id}</p>
              <h2 style={titleStyle}>{user.name}</h2>
              <h6 style={textStyle}>Username: {user.username}</h6>
              <p style={textStyle}>Email: {user.email}</p>
              <p style={textStyle}>Address: {user.address.street}</p>
              <p style={textStyle}>City: {user.address.city}</p>
              <p style={textStyle}>Zip Code: {user.address.zipcode}</p>
              <p style={textStyle}>Geo: {user.address.geo.lat}</p>
              <p style={textStyle}> {user.address.geo.lng}</p>
              <p style={textStyle}>Phone: {user.phone}</p>
              <p style={textStyle}>Website: {user.website}</p>
              <p style={textStyle}>Company: {user.company.name}</p>
              <p style={textStyle}>Catch Phrase: {user.company.catchPhrase}</p>
              <p style={textStyle}>BS: {user.company.bs}</p>
            </div>
          </div>
        ))
      ) : (
        <p style={{ fontSize: "18px", color: "#999", marginTop: "50px" }}>
          Click "Fetch Users" to load data
        </p>
      )}
    </div>
  )
}

export default User