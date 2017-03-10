import { ADD_ITEM, REMOVE_ITEM } from '../actions/index';

// let INITIAL_STATE = [{
//     komponenta: '',
//     pocet_ks: '',
//     cena_ks: '',
//     cena_celkem: 0
//   }]
let INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  // console.log(action.komponenta, action.pocet_ks, action.cena_ks, action.cena_celkem);
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          komponenta: action.komponenta,
          pocet_ks: action.pocet_ks,
          cena_ks: action.cena_ks,
          cena_celkem: action.cena_celkem
        }
      ];
      break;
    case REMOVE_ITEM:
      var id = action.id;
      if (id > -1) {
        state.splice(id, 1);
      }
      return [...state];
    default:
      // if nothing, return the last state, but instead of returning undefined, then we set null above
      return state;
  }
};
