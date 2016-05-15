import React from 'react';

const PostList = ({posts}) => (
    <div className="post-list">
      <header>
        <a href="/new-post" className="btn waves-effect waves-light col s12">New Post</a>
      </header>

      <section>
        <ul>
          {posts ? posts.map( (post)=> (
            <li key={post._id}>
              <header>
                <h3><a href={`/post/${post._id}`}>{post.title}</a></h3>
              </header>
              <article>
                <p>{post.content}</p>
              </article>
            </li>
          )) : 'No Posts yet'}
        </ul>
      </section>
    </div>
);

export default PostList;
