import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { fetchGifs } from '../actions/gifs'

//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing

class GifShowCard extends React.Component {
  componentDidMount() {
    this.props.fetchGifs()
  }

  render(props) {
  return (
    // gif ?
    // <div>
    //   <h3>{gif.attributes.name}</h3>
    // </div> :
    // <p>This the the GifShowCard with no gif!</p>
    0
    )
  }
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs
  }
}

export default withRouter(connect(mapStateToProps, {fetchGifs})(GifShowCard));
