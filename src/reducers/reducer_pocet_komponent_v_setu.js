import { POCET_KOMPONENT_V_SETU } from '../actions/index';

let INITIAL_STATE = 0;

export default function(state = INITIAL_STATE, action) {
  // console.log(action.komponenta, action.pocet_ks, action.cena_ks, action.cena_celkem);
  switch (action.type) {
    case POCET_KOMPONENT_V_SETU:
      return({
        suma: action.suma
      });
      break;
    default:
      // if nothing, return the last state, but instead of returning undefined, then we set null above
      return state;
  }
};
