import types from './types';

const postsLoading = () => ({
  type: types.POSTS_LOADING
});

const postsError = () => ({
  type: types.POSTS_ERROR
});

const postsLoaded = (posts) => ({
  type: types.POSTS_LOADED,
  posts
})

export const getPosts = () => async (dispatch) => {
  dispatch(postsLoading());
  try {
    //guardar el resultado
    const res = await fetch('http://localhost:3001/albums');
    const json = await res.json();
    dispatch(postsLoaded(json));
  } catch(err) {
    //controlar errores
    dispatch(postsError());
  }
};
