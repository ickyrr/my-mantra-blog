import User from '/lib/collections/users.js';

export default {
  register({LocalState, FlowRouter},firstname,lastname,password,emails) {
    if(!firstname || !lastname || !password || !emails) {
      return LocalState.set('REGISTRATION_ERROR', 'Please fill up all fields');
    }

    LocalState.set('REGSITRATION_ERROR', null);

    const user = new User();

    user.firstname = firstname;
    user.lastname = lastname;
    user.services = {
      password: {bcrypt: password},
    };
    user.emails = [
      {
        address: emails,
      }
    ];

    user.validate({}, function (err) {
      if (err) {
        return LocalState.set('REGISTRATION_ERROR', err);
      }

      user.save(function (err1,data) {
        if (err1) {
          return LocalState.set('REGISTRATION_ERROR', err1);
        }
        FlowRouter.go('/login');
      });



    });

  }
}
