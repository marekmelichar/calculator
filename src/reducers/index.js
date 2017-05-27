import { combineReducers } from 'redux';

import ItemsArray from './reducer_items_array';
import PocetKomponentVsetu from './reducer_pocet_komponent_v_setu';
import CenaZaSet from './reducer_cena_za_set';
import CelkovaCenaZaKomponentyVSetu from './reducer_celkova_cena_za_komponenty_v_setu';
import PocetPouzitiZaRok from './reducer_pocet_pouziti_za_rok';
import Logics from './reducer_logic';
// import Save from './reducer_save';
// import LoadJSON from './reducer_load_JSON';

// everything inside is a piece of state
const rootReducer = combineReducers({
  items: ItemsArray,
  pocet_komponent_v_setu: PocetKomponentVsetu,
  cena_za_set: CenaZaSet,
  celkova_cena_za_komponenty_v_setu: CelkovaCenaZaKomponentyVSetu,
  pocet_pouziti_za_rok: PocetPouzitiZaRok,
  logic: Logics
  // json: LoadJSON
  // save: Save
});

export default rootReducer;
