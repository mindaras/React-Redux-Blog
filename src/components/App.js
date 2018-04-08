import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PostList from '../containers/PostList'
import CreatePost from '../containers/CreatePost';
import SinglePost from '../containers/SinglePost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/posts/new" component={CreatePost} />
          <Route path="/posts/:id" component={SinglePost} />
          <Route path="/" component={PostList} />
        </Switch>
      </div>
    );
  }
}

export default App;
