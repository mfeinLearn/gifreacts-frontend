
import React from 'react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HumerTypeDisplay from './HumerTypeDisplay.js';
//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing

const handleClickOnEdit = (e) => {
  e.preventDefault();
  console.log('The Edit button was clicked.');

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
    name: { gif.emotion.attributes.name }
    <br />
    range: {gif.humer_type.attributes.range}
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


const AllGifs = (props) => {
  const gifs = props.gifs.map((gif) => {
    return(
      <div className="item">
      <br />
      <img height="200" width="200" alt={gif.attributes.name} src={gif.attributes.name} />
      <br />
      name: { gif.emotion.attributes.name  }
      <br />
      range: {gif.humer_type.attributes.range}
      {renderNameAndRange(gif)}
      {renderEditAndDeleteButtons()}
      <HumerTypeDisplay humer_rating={gif.humer_type.attributes.range}/>
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
