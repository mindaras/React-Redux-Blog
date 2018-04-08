import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS',
             CREATE_POST = 'CREATE_POST',
             FETCH_POST = 'FETCH_POST',
             DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts',
      API_KEY = '?key=1z2wq21ku321oia3e';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}${API_KEY}`, values)
                  .then(callback);

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  axios.delete(`${ROOT_URL}/${id}${API_KEY}`)
  .then(callback);

  return {
    type: DELETE_POST,
    id
  }
}
