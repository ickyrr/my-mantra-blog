import {Meteor} from 'meteor/meteor';
import {Astro} from 'meteor/jagi:astronomy';
import { Accounts } from 'meteor/accounts-base';

const User = Astro.Class.create({
  name: 'User',
  collection: Meteor.users,
  fields: {
    firstname: String,
    lastname: String,
    emails: {
      type: [ Object ],
      default() {
        return [];
      }
    },
    createdAt: Date,
    services: Object
  },
  events: {
    // afterInsert(event) {
    //   event.preventDefault();
    //   const password = event.currentTarget.services.password.bcrypt;
    //   const _id = event.currentTarget._id;
    //   console.log(_id, password);
    //   // const {_id,services.password.bcrypt} = event.currentTarget;
    //   Accounts.setPassword(_id,password);
    // }
  }
});

if (Meteor.isClient) {
  User.extend({
    fields: {
      services: Object
    }
  });
}

export default User;
