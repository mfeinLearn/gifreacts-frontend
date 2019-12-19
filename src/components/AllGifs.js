//AllGifs.js

import React from 'react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HumerTypeDisplay from './HumerTypeDisplay.js';
//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing

// const iwascalled = (props) => {
//   props.onSubmit();
// }

const AllGifs = (props) => {

  const handleClickOnEdit = (event, gif) => {
    event.preventDefault();
    // pass in gif id into push instead of 62
    //props.history.push('/gifs/62')
    props.history.push(`/gifs/${gif.id}`)
    console.log(`The Edit button was clicked. - /gifs/${gif.id}`);
  }


  const handleClickOnDelete=(e) =>  {
    e.preventDefault();
    console.log('The Delete button was clicked.');

  }

  const ColoredLine = ({ color }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: 5
          }}
      />
  );

  const renderEditAndDeleteButtons = (gif) => {
    return (
      <div className="right floated content">
         <button className="ui button primary" key={Math.random()} onClick={(event)=>handleClickOnEdit(event, gif)}>
          Edit
      </button>
        <button className="ui button negative" key={Math.random()} onClick={handleClickOnDelete}>
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

  const gifs = props.gifs.map((gif) => {
    let returnVal
    if (gif) {
      returnVal = <div className="item">
    <br />
    <ColoredLine color="red" />
    <li key={gif.id}><img height="200" width="200" key={gif.id} alt={gif.attributes.name} src={gif.attributes.name}/></li>
    <br />
    {renderEditAndDeleteButtons(gif)}
     <HumerTypeDisplay humer_rating={gif.attributes.humer_type_range} key={Math.random()}/>
    <br />
    </div>
      } else {
    returnVal = <div>
                  LOADING...
                </div>
    }
    return(
    returnVal
    );
  });

  return gifs;
};


const mapStateToProps = (state) => {
  return {gifs: state.gifs}
}

export default connect(mapStateToProps)(AllGifs);
