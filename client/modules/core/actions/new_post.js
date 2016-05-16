import Post from '/lib/collections/posts.js';

export default {
  newPost({LocalState, FlowRouter},title, content) {
    if (!title || !content) {
      return LocalState.set('NEW_POST_ERROR', 'Title and Content are required!');
    }

    LocalState.set('NEW_POST_ERROR', null);

    const post = new Post();
    post.author = Meteor.userId();
    post.title = title;
    post.content = content;

    post.validate({}, function (err) {
      if(err) {
        return LocalState.set('NEW_POST_ERROR', err);
      }

      post.save(function (err1) {
        if (err1) {
          return LocalState.set('NEW_POST_ERROR', err1);
        }
      });
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('NEW_POST_ERROR', null);
  }
}
