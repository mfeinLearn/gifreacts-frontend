// synchronous action creators
// - import axios from 'axios';

export const setGif = gif => {
  return {
    type: "SET_GIF",
    gif
  }
}

export const addGif = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/gif", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        }
      })
    .then(r => r.json())
    .then(response => {
      dispatch(setGif(console.log(response)))
    })
  }
}
// do last

// VVV testing something
// export const setGifs = gifs => {
//   return dispatch => {
//     return fetch("http://localhost:3001/api/v1/trips", {
//       credentials: "include",
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       },
//     })
//     .then(r => r.json())
//     .then(response => {
//       if (response.error) {
//         alert(response.error)
//       } else {
//         // console.log(response.data)
//         dispatch(setMyTrips(response.data))
//       }
//     })
//     .catch(console.log)
//   }
// }

// works
// export const setGifs = gifs => {
//   return {
//     type: "SET_GIFS",
//     gifs
//   }
// }
//works
