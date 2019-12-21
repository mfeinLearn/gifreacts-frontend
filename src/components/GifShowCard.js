import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { editGifReaction } from '../actions/gifs'
 import { deleteGif } from '../actions/gifs'

//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing

class GifShowCard extends React.Component {





  render() {
    const renderEditButton = (gif) => {
      return (
        <div className="right floated content">
           <button className="ui button primary" key={Math.random()} onClick={(event)=>handleClickOnEdit(event, gif)}>
            Edit
          </button>
          <button className="ui button negative" key={Math.random()} onClick={(event) => handleClickOnDelete(event, gif)}>
            Delete
          </button>
        </div>
      );
    }

    const handleClickOnEdit = (event, gif) => {
      event.preventDefault();
      // pass in gif id into push instead of 62
      //props.history.push('/gifs/62')
      this.props.history.push(`/gifs/${gif.id}/edit`)
      console.log(`The Edit button was clicked. - /gifs/${gif.id}/edit`);
    }

    const handleClickOnDelete = (event, gif) =>  {
      event.preventDefault();
      console.log('The Delete button was clicked.');
      this.props.deleteGif(gif, gif.id)
    }
    //console.log("this.props.gif in GifShowCard",this.props.gif)
  // console.log("this.props.gifs:",this.props.gifs)
  const result = this.props.gifs//.filter(gifFromStore => gifFromStore.id === this.props.gif.id);
  return (
    <div>
    { this.props.gif && result ?
  <form>
  {/* img tag && new form */}
    <img
      height="200" width="200"
      alt={this.props.gif.attributes.name}
      src={this.props.gif.attributes.name}
    />
    <br />
      <label>Emotion: </label><strong>{this.props.gif.attributes.emotion_name} </strong>
          <br />
      <label>humer: </label><strong>{this.props.gif.attributes.humer_type_range}</strong>
      {renderEditButton(this.props.gif)}
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

export default withRouter(connect(mapStateToProps, {deleteGif})(GifShowCard));
