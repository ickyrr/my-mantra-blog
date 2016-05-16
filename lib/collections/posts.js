import {Mongo} from 'meteor/mongo';
import {Astro} from 'meteor/jagi:astronomy';
import {Meteor} from 'meteor/meteor';

const Posts = new Mongo.Collection('posts');

export default Post = Astro.Class.create({
  name: 'Post',
  collection: Posts,
  fields: {
    author: String,
    title: {
      type: String,
      validators: [
        {
          type: 'minLength',
          param: 6,
          message: 'Title is too short'
        }
      ]
    },
    content: {
      type: String,
      validators: [
        {
          type: 'minLength',
          param: 150,
          message: 'Content is too short, should be at lease 150 characters'
        }
      ]
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
