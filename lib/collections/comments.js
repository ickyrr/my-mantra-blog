import {Mongo} from 'meteor/mongo';
import {Astro} from 'meteor/jagi:astronomy';

const Comments = new Mongo.Collection('comments');

export default Comment = Astro.Class.create({
  name: 'Comment',
  collection: Comments,
  fields: {
    postId: String,
    // ownerId: String,
    content: String,
    createdAt: Date
  }
});
