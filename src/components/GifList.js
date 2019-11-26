import React from 'react';
// import GifCard from './GifCard'
import { connect } from 'react-redux'

const GifList = props => {
  // console.log(props.gif[0])
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

export default connect(mapStateToProps)(GifList);
