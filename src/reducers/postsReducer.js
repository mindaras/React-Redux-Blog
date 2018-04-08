import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/actionCreators';

export default function(state = {}, action) {
  let newState = {};

  switch (action.type) {
    case FETCH_POSTS:
      newState = {};

      action.payload.data.forEach(post => newState[post.id] = {...post});

      return newState;

    case FETCH_POST:
      return {...state, [action.payload.data.id]: action.payload.data};

    case DELETE_POST:
      newState = {};

      // omit the object which is being deleted
      Object.keys(state).forEach(key => key !== action.id ? newState[key] = {...state[key]} : '');

      return newState;

    default:
      return state;
  }

}
