import React from 'react';
// import { Link } from 'react-router-dom'
import axios from '../api/axios.js'
import SearchBar from '../components/SearchBar.js';
import SingleGif from '../components/SingleGif.js'
import GifList from '../components/GifList.js'
// import AllGifs from './AllGifs.js'
//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing

class NewGifFormContainer extends React.Component {

state = {
  gif: []
}

onSearchSubmit = async (term) => {
   let APIKEY = "u4yJyilMJDYdNFQJPkHKp0I0ptWfSFJs";
   let url = `/search?api_key=${APIKEY}`;
   const response = await axios.get(url, {
     params: {q: term, limit: 1}
   })
   // response.data.data
   // this will cause our component to rerender
   //this.props.setGifResponseData(response.data.data)
       this.setState({ gif: response.data.data });
   //console.log(response.data.data)
 };

render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <SingleGif gif={this.state.gif}/>
  {/*      <GifList gif={this.state.gif}/>     */}
        {/*// <GifList />*/}
      </div>
    )
  }
}

export default NewGifFormContainer;
