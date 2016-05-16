import React from 'react';
import {Meteor} from 'meteor/meteor';

class Navigation extends React.Component {
  logout(event) {
    event.preventDefault();
    const {FlowRouter} = this;
    Meteor.logout(function (err) {
      if (!err) {
        FlowRouter.go('/login');
      }
    });
  }

  getUsername() {
    console.log(Meteor.user());
  }

  render() {
    return (
      <nav className="teal">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">
            <span><i className="large material-icons prefix">insert_chart</i></span>
          </a>
          {Meteor.userId() ?
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li>
                <div className="chip">
                  <img src="/images/no-image.png" />
                </div>
              </li>
              <li>
                <button className="btn waves-effect waves-light col s12"
                    onClick={this.logout}>Logout</button>
              </li>
            </ul> :
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          }
        </div>
      </nav>
    );
  }
}

export default Navigation;
