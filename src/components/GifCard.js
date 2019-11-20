
import React from 'react';


const GifCard = props => {
  // console.log(props.gif)
  const aSingleGif = props.gif.map(({title,id, images}) => {
    return <img alt={title} key={id} src={images.downsized.url} />
  });

 return <div>{aSingleGif}</div>;
};

export default GifCard;
