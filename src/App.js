import React from 'react';
import axios from 'axios'
import './App.css';
import NavBar from './components/NavBar.js'
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = { gifs: [] }


  onSearchSubmit = async (term) => {
    let APIKEY = "u4yJyilMJDYdNFQJPkHKp0I0ptWfSFJs"
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}`;
    const response = await axios.get(url, {
      params: {q: term, limit: 1}
    })
    // response.data.data
    // this will cause our component to rerender
    this.setState({ gifs: response.data.data });
    //console.log(response.data.data)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <NavBar/>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.gifs.length} gifs
      </div>
    );
  }
}

export default App;

// let APIKEY = ""
// let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
// let str = term
// url = url.concat(str);
// axios.get(url);

// onSearchSubmit(term) {
//   let APIKEY = "u4yJyilMJDYdNFQJPkHKp0I0ptWfSFJs"
//   let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}`;
//   axios.get(url, {
//     params: {q: term, limit: 1}
//   }).then((response) => {
//     console.log(response.data.);
//   });
// }

//////
//////
// onSearchSubmit(term) {
//   let APIKEY = "u4yJyilMJDYdNFQJPkHKp0I0ptWfSFJs"
//   let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}`;
//   axios.get(url, {
//     params: {q: term, limit: 1}
//   })
//   .then((response) => {
//     console.log(response.data.data[0].images.downsized.url);
//   })
// }
