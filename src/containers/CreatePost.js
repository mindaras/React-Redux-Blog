import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import '../styles/CreatePost.css';

class CreatePost extends Component {
  renderInput(field) {
    return (
      <label className="create__label">
        {field.label}
        <input type="text" className="create__input" {...field.input} autoComplete="off" />
        <p className="create__error">{field.meta.touched ? field.meta.error : ''}</p>
      </label>
    );
  }

  renderTextarea(field) {
    return (
      <label className="create__label">
        {field.label}
        <textarea className="create__input create__input--textarea" {...field.input}></textarea>
        <p className="create__error">{field.meta.touched ? field.meta.error : ''}</p>
      </label>
    );
  }

  submitHandler(values) {
    this.props.createPost(values, () => this.props.history.push('/'));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="create">
        <h3 className="create__title">Create new post</h3>
        <form className="create__form" onSubmit={handleSubmit(this.submitHandler.bind(this))}>
          <Field name="title" label="Title" component={this.renderInput} />
          <Field name="categories" label="Categories" component={this.renderInput} />
          <Field name="content" label="Content" component={this.renderTextarea} />
          <input type="submit" className="create__button" value="submit" />
          <Link to="/" className="create__button">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  !values.title ? errors.title = 'Please enter a title' : '';
  !values.categories ? errors.categories = 'Please enter a category' : '';
  !values.content ? errors.content = 'Please enter some content' : '';

  return errors;
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ createPost }, dispatch);
}

export default reduxForm({
  form: 'CreatePostForm',
  validate
})(
  connect(null, mapDispatchtoProps)(CreatePost)
);
