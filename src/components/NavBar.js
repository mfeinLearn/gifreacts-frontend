import React from 'react';
import { NavLink } from 'react-router-dom'
// import { connect } from 'react-redux'

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink exact activeClass to="/home">Home |  </NavLink>
      <NavLink exact activeClass to="/gifs">All Gifs |  </NavLink>
      <NavLink exact activeClass to="/gifs/new">New Gif  </NavLink>
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
