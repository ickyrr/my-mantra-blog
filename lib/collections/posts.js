import {Mongo} from 'meteor/mongo';
import {Astro} from 'meteor/jagi:astronomy';

const Posts = new Mongo.Collection('posts');

export default Post = Astro.Class.create({
  name: 'Post',
  collection: Posts,
  fields: {
    'author': String,
    'title': String,
    'content': String
  },
  behavior: {
    timestamp: {}
  }
});
