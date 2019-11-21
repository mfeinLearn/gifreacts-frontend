// synchronous action creators

export const setGifs = gifs => {
  return {
    type: "SET_GIFS",
    gifs
  }
}
// do last

// VVV testing something
// export const getMyTrips = () => {
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
