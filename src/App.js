import React from 'react';
import './App.css';
import { connect } from 'react-redux'
// import axios from './api/axios.js'
// import { setGifResponseData } from './actions/gifs.js'
// import { fetchGifs } from './actions/gifs.js'

import NavBar from './components/NavBar.js'
// import SearchBar from './components/SearchBar.js';
// import SingleGif from './components/SingleGif.js'
// import GifList from './components/GifList.js'
import Home from './components/Home.js'
import Blank from './components/Blank.js'
import AllGifs from './components/AllGifs.js'
import NewGifFormContainer from './containers/NewGifFormContainer.js'
import EditGifFormContainer from './containers/EditGifFormContainer.js'
import GifShowCard from './components/GifShowCard.js'
import {Switch} from 'react-router-dom'
import { BrowserRouter as Router,Route, withRouter} from 'react-router-dom'



class App extends React.Component {
  //1
   // state = { gif: [] }

   // componentDidMount() {
   //    this.props.fetchGifs()
   //  }

//2
  // onSearchSubmit = async (term) => {
  //   let APIKEY = "u4yJyilMJDYdNFQJPkHKp0I0ptWfSFJs";
  //   let url = `/search?api_key=${APIKEY}`;
  //   const response = await axios.get(url, {
  //     params: {q: term, limit: 1}
  //   })
  //   // response.data.data
  //   // this will cause our component to rerender
  //   //this.props.setGifResponseData(response.data.data)
  //       this.setState({ gif: response.data.data });
  //   //console.log(response.data.data)
  // }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
      {/*//3
      // <SearchBar onSubmit={this.onSearchSubmit}/>
      // <SingleGif gif={this.state.gif}/>
      // <GifList gif={this.state.gif}/>
      // <GifList />
      */}
      {console.log("this.props.gifs:",this.props.gifs)}
          <Router>
            <NavBar/>
            <Switch>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/gifs' component={AllGifs}/>
            <Route exact path='/gifs/new' component={NewGifFormContainer}/>
             <Route exact path='/gifs/:id' render={ props  => {
               const gif = this.props.gifs.find(gif => gif.id === props.match.params.id)
               console.log(this.props.gifs)
               return <GifShowCard gif={gif} {...props}/>
               }
             }/>
            <Route exact path='/gifs/:id/edit' component={EditGifFormContainer}/>
            <Route exact path='/blank' component={Blank}/>
            </Switch>
          </Router>

          {/* Found: {this.state.gifs.length} gifs */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    gifs: state.gifs
  })
}

//export default App;
export default withRouter(connect(mapStateToProps)(App));

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
