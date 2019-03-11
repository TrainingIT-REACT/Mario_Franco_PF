import types from '../actions/types';

// Estado inicial
const initialState = {
  isLoading: false,
  songs: [],
  error: false
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SONGS_LOADING:
      // Activamos la flag de isLoading.
      // Eliminamos cualquier error anterior
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case types.SONGS_LOADED:
      // Almacenamos los articulos y reiniciamos
      // las flags
      return {
        ...state,
        isLoading: false,
        songs: action.songs,
        error: false
      }
    case types.SONGS_ERROR:
      // Desactivamos la flag de carga y
      // activamos la de error
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state;
  }
}

export default reducer;
