import { NAZEV_SETU } from '../actions/index';

let INITIAL_STATE = {
  nazev: ""
};

export default function(state = INITIAL_STATE, action) {
  // console.log(action.nazev);
  switch (action.type) {
    case NAZEV_SETU:
      return({
        nazev: action.nazev
      });
      break;
    default:
      // if nothing, return the last state, but instead of returning undefined, then we set null above
      return state;
  }
};
