import React from 'react';
// import { Link } from 'react-router-dom'
//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing
const Blank = () => {
  return (
    <div className="NavBar">
        <span role="img" aria-labelledby="myNameId">😖 </span>
       <h2>This is Blank</h2>
        <span role="img" aria-labelledby="myNameId"> 🙄</span>
    </div>
  )
}

export default Blank;
