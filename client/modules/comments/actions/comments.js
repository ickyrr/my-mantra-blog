import Comment from '/lib/collections/comments.js';

export default {
  addComment({Meteor, LocalState}, postId, content) {
    if (!postId || !content) {
      return LocalState.set('ADD_COMMENT_ERROR', 'Naay error dong.');
    }

    LocalState.set('ADD_COMMENT_ERROR', null);

    const doc = new Comment();
    doc.postId = postId;
    doc.content = content;
    doc.createdAt = new Date();

    doc.validate({}, function (err) {
      if (!err) {
        doc.save();
      }
    });

  }
};
