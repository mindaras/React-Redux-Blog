import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SinglePost.css';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/actionCreators';
import { bindActionCreators } from 'redux';

class SinglePost extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchPost(id);
  }

  deleteHandler() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => this.props.history.push('/'));
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div className="loading">Loading...</div>;
    }

    return (
      <div className="post">
        <Link className="link" to="/">Back to list</Link>
        <div className="post__delete" onClick={this.deleteHandler.bind(this)}>Delete post</div>
        <h3 className="title">{post.title}</h3>
        <p className="post__categories"><span className="bold">Categories:</span> {post.categories}</p>
        <p className="post__content">{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost, deletePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
