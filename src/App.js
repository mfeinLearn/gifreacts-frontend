import React from 'react';
import './App.css';
import axios from './api/axios.js'
import NavBar from './components/NavBar.js'
import SearchBar from './components/SearchBar.js';
import SingleGif from './components/SingleGif.js'
import GifList from './components/GifList.js'



class App extends React.Component {
  state = { gif: [] }


  onSearchSubmit = async (term) => {
    let APIKEY = "u4yJyilMJDYdNFQJPkHKp0I0ptWfSFJs";
    let url = `/search?api_key=${APIKEY}`;
    const response = await axios.get(url, {
      params: {q: term, limit: 1}
    })
    // response.data.data
    // this will cause our component to rerender
    this.setState({ gif: response.data.data });
    //console.log(response.data.data)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <NavBar/>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <SingleGif gif={this.state.gif}/>
        <GifList />
        {/*<GifList gif={this.state.gif}/>*/}
        {/* Found: {this.state.gifs.length} gifs */}
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
