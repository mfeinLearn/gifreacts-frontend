//AllGifs.js

import React from 'react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HumerTypeDisplay from './HumerTypeDisplay.js';
//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing

const handleClickOnEdit = (event, props) => {
  event.preventDefault();
  console.log('The Edit button was clicked.');
  //iwascalled()
}


const handleClickOnDelete=(e) =>  {
  e.preventDefault();
  console.log('The Delete button was clicked.');

}

const renderEditAndDeleteButtons = () => {
  return (
    <div className="right floated content">
       <button className="ui button primary" onClick={handleClickOnEdit}>
        Edit
    </button>
      <button className="ui button negative" onClick={handleClickOnDelete}>
        Delete
      </button>
    </div>
  );
}


const renderNameAndRange = (gif) => {
  return (
    <div>
    name: { gif.attributes.emotion_name }
    <br />
    range: {gif.attributes.humer_type_range}
    </div>

    /*
    <form className="item">
      <br />
      <input
        placeholder="emotion"
        name="emotion"
        type="text"
      />
      <input
        placeholder="humer type"
        name="humer type"
        type="text"
      />
      <input type="submit" value="Submit" />
    </form>
    */
  );
}

// const iwascalled = (props) => {
//   props.onSubmit();
// }

const AllGifs = (props) => {

  const gifs = props.gifs.map((gif) => {
    return(
      <div className="item">
      <br />
      <li key={gif.id}><img height="200" width="200" alt={gif.attributes.name} src={gif.attributes.name} /></li>
      <br />
  {/*    //  name: { gif.attributes.emotion_name}
      // <br />
      // range: {gif.attributes.humer_type_range} */}
      {/*  // {(props) => iwascalled(props)} */}
       {renderNameAndRange(gif)}
      {renderEditAndDeleteButtons()}
       <HumerTypeDisplay humer_rating={gif.attributes.humer_type_range}/>
      <br />
      </div>
    );
  });

  return gifs;
};


const mapStateToProps = (state) => {
  return {gifs: state.gifs}
}

export default connect(mapStateToProps)(AllGifs);
