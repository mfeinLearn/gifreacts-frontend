export const setGif = gif => {
  return {
    type: "SET_GIF",
    gif
  }
}
export const addAGif = gif => {
  return {
    type: "ADD_A_GIF",
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
      const newVar = {...response.data,emotion: response.included[0], humer_type: response.included[1]}
      dispatch(setGif(newVar))
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
      const newVar = response.data
      dispatch(addAGif(newVar))
    })
  }
}
