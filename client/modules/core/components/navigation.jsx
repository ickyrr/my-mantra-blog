import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="teal">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            <span><i className="large material-icons prefix">insert_chart</i>Blog</span>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
