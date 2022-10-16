// make navbar componnet
import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './styles/navStyles';

const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
    
          <NavMenu>
            <NavLink to='/track-package' activeStyle>
              Track Package
            </NavLink>
            <NavLink to='/quote' activeStyle>
              Quote
            </NavLink>
            <NavLink to='/ship' activeStyle>
               Ship
            </NavLink>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
            {/* <NavLink to='/sign-in' activeStyle>
              Sign In
            </NavLink> */}
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };
    
  export default Navbar;