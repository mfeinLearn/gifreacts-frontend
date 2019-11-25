export default (state = [], action) => {
  switch (action.type) {
    case "SET_GIF":
      return [...state, action.gif]
    // case "SET_RESPONSE_DATA":
    //   return [...state, action.gif]
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
