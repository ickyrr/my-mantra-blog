import React from 'react';

const CommentList = ({comments}) => (
  <div className="comment-list">
    <ul>
      {comments ? comments.map(comment => (
        <li key={comment._id}>
          <span>{comment.content}</span>
        </li>
      )) : ''}
    </ul>
  </div>
);

export default CommentList;
