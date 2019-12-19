import React from 'react';
import { NavLink } from 'react-router-dom'
// import { connect } from 'react-redux'

const NavBar = () => {
  return (
    <div className="ui three item menu">
      <NavLink exact to="/home" className="item">Home</NavLink>
      <NavLink exact to="/gifs" className="item">All Gif Reactions</NavLink>
      <NavLink exact to="/gifs/new" className="item">New Gif Reaction</NavLink>
      {/*<NavLink exact activeClass to="/blank">Blank </NavLink> */}
    </div>
  )
}


// const mapStateToProps = ({  }) => {
//   return {
//
//   }
// }

export default NavBar;
