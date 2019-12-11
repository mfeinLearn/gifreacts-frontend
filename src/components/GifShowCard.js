import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { fetchGifs } from '../actions/gifs'

//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing

class GifShowCard extends React.Component {
  // componentDidMount() {
  //   this.props.fetchGifs()
  // }

  render() {
  return (
    <div>

    { this.props.gif ?
      // img tag && new form 
      <h3>{this.props.gif.attributes.name}</h3>
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

export default withRouter(connect(mapStateToProps, {fetchGifs})(GifShowCard));
