import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { BiSkipNext } from 'react-icons/bi';
import './Navbar.css';


const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <NavLink to='/'>
          <h2>
            <BiSkipNext /> IronNext
          </h2>
        </NavLink>

        <ul>
          <li>
            <NavLink to='/webdev'>
              Web Development
            </NavLink>
          </li>
          <li>
            <NavLink to='/design'>
              UI/UX Design
            </NavLink>
          </li>
          <li>
            <NavLink to='/user'>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to='/'>
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Navbar;
