import React from 'react';

const PostList = ({posts}) => (

  <div className='postlist'>

    <a href="/add-post">Add Post</a>

    <ul>
      {posts ? posts.map(post => (
        <li key={post._id}>
          <a href={`/post/${post._id}`}>{post.title}</a>
        </li>
      )) : ''}
    </ul>
  </div>
);

export default PostList;
