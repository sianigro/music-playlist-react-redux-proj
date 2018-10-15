// import { GET_ERRORS, CLEAR_ERRORS } from '../constants';

// const initialState = {};

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case GET_ERRORS:
//       return action.payload;
//     case CLEAR_ERRORS:
//       return {};
//     default:
//       return state;
//   }
// }

//Multi Page Version:
import { GET_ERRORS, CLEAR_ERRORS } from '../constants';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}
