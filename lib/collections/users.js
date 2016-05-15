import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Astro} from 'meteor/jagi:astronomy';

export default User = Astro.Class.create({
  name: 'User',
  collection: Meteor.users,
  fields: {
    firstname: String,
    lastname: String,
    services: Object,
    emails: [Object],
  },
  events: {
    afterInsert(event) {
      event.preventDefault();

      const _id = event.currentTarget._id;
      const password = event.currentTarget.services.password.bcrypt;
      const email = event.currentTarget.emails[0].address;

    }
  },
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt',
    }
  }
});
