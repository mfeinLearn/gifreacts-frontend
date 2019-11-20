// configuration to axios or related to getting
// axios to accept our request
import axios from 'axios';

// create an instance of the axios client with
//.. a couple of defaulted properties
// create a costomized copy of it that is
//..costomized making request to some spicific url
// ..usign these headers
export default axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs'
});
