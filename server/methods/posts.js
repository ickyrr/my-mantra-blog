import {Posts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'posts.create'(id, title, content) {
      Posts.insert(id,title,content);
    }
  });
}
