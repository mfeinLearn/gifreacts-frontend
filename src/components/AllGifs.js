import React from 'react';
import { Link } from 'react-router-dom'
//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing
const AllGifs = () => (
  <div>
    <span>
      <Link>I am AllGifs</Link>
    </span>
  </div>
);

export default AllGifs;
