import React from 'react';
import { Link } from 'react-router-dom'
//NavLink - are great for nav bars when
//.. you are going to see those links all times
// Link - is a one time thing
const Blank = () => (
  <div>
    <span>
      <Link>Sign Up</Link> or <Link>Log In</Link>
    </span>
  </div>
);

export default Blank;
