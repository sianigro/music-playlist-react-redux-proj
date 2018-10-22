// import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import thunk from 'redux-thunk';
// import { errorReducer, authReducer } from '../reducers';

// const reducers = combineReducers({
//   // insert reducers here
//   errors: errorReducer,
//   auth: authReducer
// });

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   reducers,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// export default store;

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import {
  errorReducer,
  authReducer,
  userReducer,
  tokenReducer,
  playlistReducer,
  songsReducer,
  albumsReducer,
  artistsReducer,
  uiReducer,
  browseReducer,
  soundReducer
} from '../reducers';

const reducers = combineReducers({
  // insert reducers here
  errors: errorReducer,
  auth: authReducer,
  userReducer,
  tokenReducer,
  playlistReducer,
  songsReducer,
  albumsReducer,
  artistsReducer,
  uiReducer,
  browseReducer,
  soundReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
