import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/actionCreators';
import { Link } from 'react-router-dom';
import '../styles/PostList.css';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  selectHandler(id) {
    this.props.history.push(`/posts/${id}`);
  }

  render() {
    const posts = this.props.posts;
    const postList = Object.keys(posts).map(key => (
      <li key={posts[key].id}
          className="posts__item"
          onClick={this.selectHandler.bind(this,posts[key].id)}>{posts[key].title}</li>
    ));

    return (
      <div className="posts">
        <Link className="link" to="/posts/new">New Post</Link>
        <h3 className="title">Posts</h3>
        <ul className="posts__list">{postList}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
