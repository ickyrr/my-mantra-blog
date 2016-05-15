import React from 'react';

class Register extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const {firstName,lastName,password,emails} = this.refs;
    const {register} = this.props;
    register(firstName.value, lastName.value, password.value, emails.value);
  }

  _back(event) {
    event.preventDefault();
    history.back();
  }

  render() {
    return (
      <div id="registerForm" className="row form-custom register">
        <div className="col s12 z-depth-6 card-panel">
          <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>

            <div className="row">
              <div className="input-field col s12 center">
                <i className="large material-icons icon-teal">insert_chart</i>
                <p className="center login-form-text">Please register to post or comment</p>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input ref="firstName" type="text" className="validate" />
                <label for="firstName">First Name</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input ref="lastName" type="text" className="validate" />
                <label for="lastName">Last Name</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-action-lock-outline prefix"></i>
                <input ref="password" type="password" className="validate" />
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input ref="emails" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
              <button className="btn waves-effect waves-light col s12" type="submit">
                Submit
              </button>

              <br />
              <br />

              <button className="btn waves-effect waves-light col s12" type="button" onClick={this._back}>
                Cancel
              </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Register;
