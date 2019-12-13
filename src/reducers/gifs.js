export default (state = [], action) => {
  switch (action.type) {
    case "SET_GIFS":
      return action.gifs //[{},{}]
    // case "SET_GIF":
    //   return [...state, action.gif] //[{},{}] - good anna study
    case "ADD_A_GIF":
      return [...state, action.gif]
    case "EDIT_GIF_REACTION":
    //let theGifReaction = [state][0].map(theGif => {
    return state.map(theGif => {
      if (theGif.id === action.gif.id) {
        return action.gif
      } else {
        return theGif
      }
    })
    case "UPDATE_GIF_REACTION":
      //console.log("action.whoAmI :",action.whoAmI)
      return state
      // return [...state, theGifReaction]
      //return [ theGifReaction]
    default:
      return state
  }
}
// an empty version of what ever this
// paticular reducer is responsable for
// returning

// at what point in time will we use the default?
// When we initiate

// When @@INIT gets fired it will return the
//.. default state of all of your reducers

// default = name what ever I want in index.js

///////////////////////////////
// export default (state = [], action) => {
//   switch (action.type) {
//     case "SET_GIF":
//     debugger
//       return [...state, action.gif] //[{},{}]
//     default:
//       return state
//   }
// }
///////////////////////////////
