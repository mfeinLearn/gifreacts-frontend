import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { editGifReaction } from '../actions/gifs'

//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing

class GifShowCard extends React.Component {
  // componentDidMount() {
  //   this.props.fetchGifs()
  // }

  handleChange = (event) => {
    this.props.editGifReaction()
    const {name, value} = event.target
// [event.target.name]: event.target.value
console.log(name)
console.log(value)
    // this.setState({
    //   [event.target.name]: event.target.value
    // })
  }

  handleEditClick = (event) => {
      event.preventDefault()
      const gif = this.props.gif;
      console.log("this.props.gif in GifShowCard's handleEditClick",gif)
     let singleGifReaction = {gif, id: gif.id} // did not do yet
     this.props.editGifReaction(singleGifReaction)// did not create yet
  }

  render() {
    //console.log("this.props.gif in GifShowCard",this.props.gif)
  return (
    <div>
    { this.props.gif ?
  <form onSubmit={this.handleEditClick}>
  // img tag && new form
    <img
      height="200" width="200"
      alt={this.props.gif.attributes.name}
      src={this.props.gif.attributes.name}
    />
    <br />
      <label>emotion name: </label>
      <input type='text' placeholder='emotion name' value={this.props.gif.attributes.emotion_name} name="emotion_name" onChange={this.handleChange}/><br/>
      <label>humer type range: </label>
      <input type='text' placeholder='humer type range' value={this.props.gif.attributes.humer_type_range} name="humer_type_range" onChange={this.handleChange}/><br/>
      <input type="submit"/>
  </form>

        :
    <p>This the the GifShowCard with no gif!</p> }
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs
  }
}

export default withRouter(connect(mapStateToProps, {editGifReaction})(GifShowCard));
