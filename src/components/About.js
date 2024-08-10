import React from 'react'

function About(props) {
  let myStyle = {
    color: props.mode === "dark"?"white":"#282c34",
    backgroundColor: props.mode === "dark"?"#282c34":"white"
  }
  return (
    <>
    <div className='container' style={myStyle}>
      <p>About is here</p>
    </div>
    </>
  )
}

export default About
