// Definimos la lista de acciones
const actions = [
  "POSTS_LOADING",
  "POSTS_ERROR",
  "POSTS_LOADED",
// -----------------
  "SONGS_LOADING",
  "SONGS_ERROR",
  "SONGS_LOADED",
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
