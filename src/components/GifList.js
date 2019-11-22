import React from 'react';
import GifCard from './GifCard'
import { connect } from 'react-redux'

const GifList = props => {
  // console.log(props.gif[0])
  const gifs = props.gifs.map((gif) => {
    return <img src={gif.name} />
  });

  return gifs;
};

const mapStateToProps = (state) => {
  return {gifs: state.gifs}
}

export default connect(mapStateToProps)(GifList);
