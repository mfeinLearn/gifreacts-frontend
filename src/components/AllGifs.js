import React from 'react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing
const AllGifs = (props) => {
  const gifs = props.gifs.map((gif) => {
    return(
      <img height="200" width="200" alt={gif.attributes.name} src={gif.attributes.name} />
    );
  });

  return gifs;
};


const mapStateToProps = (state) => {
  return {gifs: state.gifs}
}

export default connect(mapStateToProps)(AllGifs);
