export const setGif = gifs => {
  return {
    type: "SET_GIFS",
    gifs
  }
}
export const addAGif = gif => {
  return {
    type: "ADD_A_GIF",
    gif
  }
}

export const editAGifReaction = gif => {
  return {
    type: "EDIT_GIF_REACTION",
    gif
  }
}


export const addGif = (gifData) => {
  return dispatch => {
    console.log(gifData)// this has to be an object
    // this is the request that we are making to our back
    return fetch("http://localhost:3001/api/v1/gifs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        },
      body: JSON.stringify(gifData)//make the data into a string
      })
    .then(r => r.json())
    .then(response => {
      console.log("response object:", response)
      //debugger
      const newVar = {...response.data}
      //dispatch(setGif(newVar))
      dispatch(addAGif(newVar))// malcome testing
    })
  }
}

export const fetchGifs = (gifData) => {
  return dispatch => {
    console.log(gifData)// this has to be an object
    // this is the request that we are making to our back
    return fetch("http://localhost:3001/api/v1/gifs")
    .then(r => r.json())
    .then(response => {
      console.log("response object:", response)
      //debugger
      dispatch(setGif(response.data))
    })
  }
}

export const editGifReaction = (data) => {
 return (dispatch) => {
   fetch(`http://localhost:3001/api/v1/gifs/${data.id}`, {
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     method: 'PATCH',
     body: JSON.stringify(data)
   })
   .then(response => response.json())
   .then(gifReaction => dispatch(editAGifReaction(gifReaction)))
 }

}
