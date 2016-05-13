import Post from '/lib/collections/posts.js';

export default {
  create({Meteor, LocalState, FlowRouter}, title, content) {
    if (!title || !content) {
      return LocalState.set('SAVING_ERROR', 'Title and Content are required');
    }

    LocalState.set('SAVING_ERROR', null);
    // this.idVar = new ReactiveVar();
    const doc = new Post();
    doc.title = title;
    doc.content = content;
    doc.createdAt = new Date();

    doc.validate({}, function (err) {
      if (!err) {
        doc.save(function (err1, id) {
          if (!err1) {
            FlowRouter.go(`/post/${id}`);
          }
        });
      }
    });

  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
