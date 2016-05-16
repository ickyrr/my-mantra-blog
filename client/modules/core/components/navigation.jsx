import React from 'react';
import {Meteor} from 'meteor/meteor';

const currentUser = () => Meteor.userId();

const Navigation = () => (
  <nav className="teal">
    <div className="nav-wrapper container">
      <a href="#" className="brand-logo">
        <span><i className="large material-icons prefix">insert_chart</i>Blog</span>
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        {currentUser ? '' : loginOrRegister}
      </ul>
    </div>
  </nav>
);

const loginOrRegister = () => (
  <div>
    <li><a href="/register">Register</a></li>
    <li><a href="/login">Login</a></li>
  </div>
);

export default Navigation;
