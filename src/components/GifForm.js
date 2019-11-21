import React from 'react'
import { connect } from 'react-redux'
import { addGif } from "../actions/gifs.js"

const GifForm = ({addGif}) => {
  return (
    <form onSubmit={addGif}>
      <input placeholder="emotion" name="emotion" type="text" />
      <input placeholder="humer type" name="humer type" type="text" />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default connect(null, { addGif })(GifForm)

// I still need....

// 1. action (creator)
// - 2 action creator?

// 2. another case statment
//.. in my currentUser reducer
