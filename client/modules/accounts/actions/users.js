import User from '/lib/collections/users.js';

export default {
  register({Meteor, LocalState}, firstname, lastname, password, emails) {
    if (!firstname || !lastname || !password || !emails) {
      return LocalState.set('REGISTER_ERROR', 'Please fill up the register form completely');
    }

    LocalState.set('REGISTER_ERROR', null);

    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    user.services = {
      password: {bcrypt: password}
    };
    user.emails = [ {emails} ];
    user.createdAt = new Date();
    user.validate({}, function (err) {

      if (err) {
        return LocalState.set('REGISTER_ERROR', err.message);
      }

      user.save(function (err1) {
        if (err1) {
          return LocalState.set('REGISTER_ERROR', err1.message);
        }
      });

    });
  }
};
