import React from 'react';

class NewComment extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();

    const {addComment, postId} = this.props;
    const {commentInput} = this.refs;
    addComment(postId, commentInput.value);
  }

  render() {
    return (
      <div>
      <form className="form-add-comment" onSubmit={this.handleSubmit.bind(this)}>
        <textarea ref="commentInput"></textarea>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default NewComment;
