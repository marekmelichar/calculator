import { POCET_POUZITI_ZA_ROK } from '../actions/index';

let INITIAL_STATE = 0;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POCET_POUZITI_ZA_ROK:
      return({
        pocet: action.pocet
      });
      break;
    default:
      // if nothing, return the last state, but instead of returning undefined, then we set null above
      return state;
  }
};
