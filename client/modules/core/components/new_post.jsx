import React from 'react';

class NewPost extends React.Component {
  handleSubmit(event) {
    event.preventDefault();

    const {newPost} = this.props;
    const {title, content} = this.refs;

    newPost(title.value, content.value);

  }

  componentWillUnmount() {
    const {clearErrors} = this.props;
    clearErrors();
  }

  render() {
    const {error} = this.props;
    return (
      <div>
        <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="row margin">
            <p className="msg-error">{error ? error.reason : ''}</p>
            <div className="input-field col s12">
              <input className="validate" id="title" ref="title" type="text"/>
              <label for="title" data-error="wrong" data-success="right">Title</label>
            </div>
          </div>
          <div className="row margin">
            <div className="input-field col s12">
              <textarea ref="content" id="content"></textarea>
              <label for="content">Content</label>
            </div>
          </div>
          <div className="row margin">
            <div className="input-field col s12">
              <button type="submit" className="btn waves-effect waves-light col s2">Publish</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
