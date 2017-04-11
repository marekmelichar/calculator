import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from '../actions/index';

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
      // break;
    case REMOVE_ITEM:
      var id = action.id;
      if (id > -1) {
        state.splice(id, 1);
      }
      return [...state];
      // break;
    case EDIT_ITEM:
      console.log(action.id, action.komponenta, action.pocet_ks, action.cena_ks, action.cena_celkem);
      var id = action.id;
      // state.forEach((element, index) => {
      //   if(element.id === item.id) {
      //       items[index] = item;
      //   }
      // });
      return [
        ...state
        // state[id] = {
        //   komponenta: action.komponenta,
        //   pocet_ks: action.pocet_ks,
        //   cena_ks: action.cena_ks,
        //   cena_celkem: action.cena_celkem
        // }
      ];
      // break;
    default:
      // if nothing, return the last state, but instead of returning undefined, then we set null above
      return state;
  }
};
