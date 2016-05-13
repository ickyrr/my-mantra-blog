import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  _newUser(event) {
    event.preventDefault();
    // const {newUser} = this.props;
    const {firstName, lastName, password, email} = this.refs;
    // newUser(firstName.value, lastName.value, password.value, email.value);
    console.log(this.props);
  }
  _back(event) {
    event.preventDefault();
    history.back();
  }
  render() {
    const {error} = this.props;
    return (
      <div className="row">
        <h2>Register new account</h2>
        {error ? error : 'no error'}
        <form className="col s12" onSubmit={this._newUser.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Placeholder" ref="firstName" type="text" className="validate" />
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input ref="lastName" type="text" className="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input ref="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input ref="email" type="email" className="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit">
            Submit
          </button>
          <button className="btn waves-effect waves-light" type="button" onClick={this._back}>
            Cancel
          </button>
        </form>

      </div>
    );
  }
}

export default Register;
