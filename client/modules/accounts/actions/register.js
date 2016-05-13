export default {
  newUser({Meteor, LocalState}, firstname, lastname, password, email) {
    if (!firstname || !lastname || !password || !email) {
      return LocalState.set('REGISTER_ERROR', 'Please fill up the register form completely');
    }

    LocalState.set('REGISTER_ERROR', null);


  }
};
