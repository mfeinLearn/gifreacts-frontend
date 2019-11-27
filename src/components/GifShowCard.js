import React from 'react';
//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing
const GifShowCard = ({gif}) => {
console.log("hi")
console.log(gif)
console.log("hi")
  return (
    gif ?
    <div>
      <h3>{gif.emotion.attributes.name}</h3>
      {console.log("hi")}
      {console.log(gif)}
      {console.log("hi")}
    </div> :
    <p>This the the GifShowCard with no gif!</p>
  )
}

export default GifShowCard;
