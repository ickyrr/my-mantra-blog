import React from 'react';

class PostAdd extends React.Component {
  render() {
    const {error} = this.props;

    return (
      <div>
        <form className="form-add-post" onSubmit={this.handleSubmit.bind(this)}>
          <h2>Add new Post</h2>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}

          <input type="text" placeholder="Title" ref="titleInput" className="new-post"/>
          <textarea ref="contentInput" className="new-post"></textarea>
          <button type="submit" className="btn waves-effect waves-light">Post</button>
        </form>
      </div>
    );
  }

  handleSubmit(event) {

    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {create} = this.props;
    const {titleInput, contentInput} = this.refs;
    create(titleInput.value,contentInput.value);
    $('.form-add-post').trigger('reset');
  }
}

export default PostAdd;
