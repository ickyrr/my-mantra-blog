import {Meteor} from 'meteor/meteor';

export default {
  login({LocalState,FlowRouter},user,password) {
    if (!user || !password) {
        return LocalState.set('LOGIN_ERROR', 'Please enter your credentials to login');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(user,password, function (err) {
      if (err) {
        return LocalState.set('LOGIN_ERROR', err);
      }

      FlowRouter.go('/');
    });
  }
}
