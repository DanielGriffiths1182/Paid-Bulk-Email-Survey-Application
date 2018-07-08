import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="http://localhost:3000" className="brand-logo">Email Campaigns</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Login With Google</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
