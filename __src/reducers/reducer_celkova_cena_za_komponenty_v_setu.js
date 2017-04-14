import { CELKOVA_CENA_ZA_KOMPONENTY_V_SETU } from '../actions/index';

let INITIAL_STATE = 0;

export default function(state = INITIAL_STATE, action) {
  // console.log(action.cena);
  switch (action.type) {
    case CELKOVA_CENA_ZA_KOMPONENTY_V_SETU:
      return({
        cena: action.cena
      });
      break;
    default:
      // if nothing, return the last state, but instead of returning undefined, then we set null above
      return state;
  }
};
