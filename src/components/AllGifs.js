//AllGifs.js

import React from 'react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteGif } from '../actions/gifs.js'
import GifShowCard from './GifShowCard.js';
import HumerTypeDisplay from './HumerTypeDisplay.js';
import ColoredLine from './ColoredLine.js';

//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing

class AllGifs extends React.Component {
   state = { humer_number: null };

handleClickOnLike = (event) => {
    event.preventDefault();
    this.setState({
      like: this.state.like + 1
    })
  }

  onFormSubmit = (event) =>{
        event.preventDefault();
  }

  renderGifsByHumerNumber = (gifs) => {
      if (this.state.humer_number === null) {
        return gifs.map((gif) => {
         return(
           <div key={gif.id} className="item">
             <br />
             <ColoredLine key={Math.random()} color="red" />
             <br />
             <GifShowCard gif={gif}/>
              <HumerTypeDisplay humer_rating={gif.attributes.humer_type_range} key={Math.random()}/>
             <br />
           </div>
           );
         })
      } else {
        return gifs.filter(gif => parseInt(this.state.humer_number) === gif.attributes.humer_type_range).map((gif) => {
            return(

              <div key={gif.id} className="item">
                <br />
                <ColoredLine key={Math.random()} color="red" />
                <br />
                <GifShowCard gif={gif}/>
                 <HumerTypeDisplay humer_rating={gif.attributes.humer_type_range} key={Math.random()}/>
                <br />
              </div>
              );
            })
      }

  }

render() {
  const gifs = this.renderGifsByHumerNumber(this.props.gifs)
    return(
      <div>
      <form onSubmit={this.onFormSubmit}>
      <label>view all of the gifs of a specific humer number:</label>
       <input
         type="text"
         value={this.state.humer_number}
         onChange={(e) => this.setState({ humer_number: e.target.value })}
       />
      </form>
      {gifs}
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    gifs: state.gifs
  }
}

export default connect(mapStateToProps, { deleteGif })(AllGifs);
