import './HumerTypeDisplay.css'
import React from 'react';

const HumerTypeDisplay = (props) => {

  const humerConfig = {
    ok: {
      text: "It's alright",
      iconName: "hand spock icon"
    },
    funny: {
      text: "WOW LOL!",
      iconName: "thumbs up icon"
    },
    rotfl: {
      text: "rolling on the floor laughing!",
      iconName: "thumbs up icon"
    }
  };

   const getHumer = (rating) => {
     if (rating <= 1) {
       return "ok"
     }
     else if (rating >= 2 && rating <= 3) {
       return "funny"
     } else {
       return "rotfl"
     }
   };

  const humer = getHumer(props.humer_rating);
  const { text, iconName } = humerConfig[humer];

  return (
  <div className={`humer-type-display ${humer}`}>
    <i className={`icon-left large ${iconName} icon`} />
    <h1>{text}</h1>
    <i className={`icon-right large ${iconName} icon`} />
  </div>
  );
};

export default HumerTypeDisplay;
