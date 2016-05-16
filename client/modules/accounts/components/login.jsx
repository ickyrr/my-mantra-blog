import React from 'react';

class Login extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const {login} = this.props;
    const {email,password} = this.refs;

    login(email.value,password.value);
  }

  render() {
    const {error} = this.props;

    return (
      <div id="login-page" className="row form-custom">
        <div className="col s12 z-depth-6 card-panel">
          <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
            {error ? error : ''}
            <div className="row">
              <div className="input-field col s12 center">
                <i className="large material-icons icon-teal">insert_chart</i>
                <p className="center login-form-text">Please login to post or comment</p>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input className="validate" id="email" type="email" ref="email"/>
                <label for="email" data-error="wrong" data-success="right">Email</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-action-lock-outline prefix"></i>
                <input id="password" type="password" ref="password"/>
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button type="submit" className="btn waves-effect waves-light col s12">Login</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Login;
