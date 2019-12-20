import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { editGifReaction } from '../actions/gifs'
// import { updateGif } from '../actions/gifs'

//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing

class GifShowCard extends React.Component {
  // componentDidMount() {
  //   this.props.fetchGifs()
  // }
  constructor() {
    super();
    this.state = {
      humer_type_range: '',
      emotion_name: ''
    }
  }



  handleInputChange = (event) => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...this.props.gifs[0].attributes,
      [name]:value
    }
    // setState
    this.setState(updatedFormInfo)
  }

  handleEditClick = (event) => {
      event.preventDefault()
      // const result = this.props.gifs.filter(gifFromStore => gifFromStore.id === this.props.gif.id);
      // console.log("result :",result)
      const id = parseInt(this.props.gif.id);
      // console.log("@@ an id of old gif:",id)
      const gifHumerTypeRange = this.state.humer_type_range;
      // console.log("@@ gifHumerTypeRange",gifHumerTypeRange)
      const gifEmotionName = this.state.emotion_name;
      // console.log("@@ gifEmotionName",gifEmotionName)
      const gif = {
                  id: this.props.gif.id,
                  emotion_name: gifEmotionName,
                  humer_type_range: gifHumerTypeRange
                  }
      // console.log("@@ an id input of new gif:",gif)
      //console.log("this.props.gif in GifShowCard's handleEditClick", gif)
     //let singleGifReaction = {gif, id}
     this.props.editGifReaction(gif, id)
  }

  render() {
    //console.log("this.props.gif in GifShowCard",this.props.gif)
  // console.log("this.props.gifs:",this.props.gifs)
  const result = this.props.gifs//.filter(gifFromStore => gifFromStore.id === this.props.gif.id);
  return (
    <div>
    { this.props.gif && result ?
  <form onSubmit={this.handleEditClick}>
  {/* img tag && new form */}
    <img
      height="200" width="200"
      alt={this.props.gif.attributes.name}
      src={this.props.gif.attributes.name}
    />
    <br />
      <label>emotion name: </label>
      <input type='text' placeholder='emotion name' defaultValue={this.props.gif.attributes.emotion_name} name="emotion_name" onChange={this.handleInputChange}/><br/>
      <label>humer type range: </label>
      <input type='text' placeholder='humer type range' defaultValue={this.props.gif.attributes.humer_type_range} name="humer_type_range" onChange={this.handleInputChange}/><br/>
      <input type="submit"/>
  </form>

        :
    <p>Loading...!</p> }
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
