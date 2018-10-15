// import { SET_CURRENT_USER, CLEAR_CURRENT_PROFILE } from '../constants';

// const initialState = {
//   isAuthenticated: false,
//   user: {}
// };

// export default function(state = initialState, action) {
//   let updated = Object.assign({}, state);

//   switch (action.type) {
//     case SET_CURRENT_USER:
//       console.log(action.payload);
//       updated.isAuthenticated = action.payload;
//       updated.user = action.payload;

//       return updated;

//     case CLEAR_CURRENT_PROFILE:
//       return {
//         ...state,
//         profile: null
//       };
//     default:
//       return state;
//   }
// }

//Multi Page Version:
import isEmpty from '../utils/isEmpty';

import { SET_CURRENT_USER, CLEAR_CURRENT_PROFILE } from '../constants';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
}
