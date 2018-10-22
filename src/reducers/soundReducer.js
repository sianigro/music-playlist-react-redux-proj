// export const soundReducer = (state = { volume: 100 }, action) => {
//   switch (action.type) {
//     case 'UPDATE_VOLUME':
//       return {
//         volume: action.volume
//       };

//     default:
//       return state;
//   }
// };

// export default soundReducer;

import { UPDATE_VOLUME } from '../constants';

const initialState = {
  volume: 100
};

export const soundReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VOLUME:
      return {
        volume: action.volume
      };

    default:
      return state;
  }
};
export default soundReducer;

// import { UPDATE_VOLUME } from '../constants';

// const initialState = {
//   volume: 100
// };

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case UPDATE_VOLUME:
//       return {
//         volume: action.volume
//       };

//     default:
//       return state;
//   }
// }
