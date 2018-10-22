// export const albumsReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'FETCH_ALBUMS_PENDING':
//       return {
//         ...state,
//         fetchAlbumsPending: true
//       };

//     case 'FETCH_ALBUMS_SUCCESS':
//       return {
//         ...state,
//         albums: action.albums,
//         fetchAlbumsError: false,
//         fetchAlbumsPending: false
//       };

//     case 'FETCH_ALBUMS_ERROR':
//       return {
//         ...state,
//         fetchAlbumsError: true,
//         fetchAlbumsPending: false
//       };

//     default:
//       return state;
//   }
// };

// export default albumsReducer;

import {
  FETCH_ALBUMS_PENDING,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_ERROR
} from '../constants';

const initialState = {};

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_PENDING:
      return {
        ...state,
        fetchAlbumsPending: true
      };

    case FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.albums,
        fetchAlbumsError: false,
        fetchAlbumsPending: false
      };

    case FETCH_ALBUMS_ERROR:
      return {
        ...state,
        fetchAlbumsError: true,
        fetchAlbumsPending: false
      };

    default:
      return state;
  }
};

export default albumsReducer;

// import {
//   FETCH_ALBUMS_PENDING,
//   FETCH_ALBUMS_SUCCESS,
//   FETCH_ALBUMS_ERROR
// } from '../constants';

// const initialState = {};

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_ALBUMS_PENDING:
//       return {
//         ...state,
//         fetchAlbumsPending: true
//       };

//     case FETCH_ALBUMS_SUCCESS:
//       return {
//         ...state,
//         albums: action.albums,
//         fetchAlbumsError: false,
//         fetchAlbumsPending: false
//       };

//     case FETCH_ALBUMS_ERROR:
//       return {
//         ...state,
//         fetchAlbumsError: true,
//         fetchAlbumsPending: false
//       };

//     default:
//       return state;
//   }
// }
