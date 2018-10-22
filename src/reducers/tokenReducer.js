// export const tokenReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'SET_TOKEN':
//       return {
//         ...state,
//         token: action.token
//       };

//     default:
//       return state;
//   }
// };

// export default tokenReducer;

import { SET_TOKEN } from '../constants';

const initialState = {};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };

    default:
      return state;
  }
};

export default tokenReducer;

// import { SET_TOKEN } from '../constants';

// const initialState = {};

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case SET_TOKEN:
//       return {
//         ...state,
//         token: action.token
//       };

//     default:
//       return state;
//   }
// }
