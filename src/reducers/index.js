import { combineReducers } from 'redux';

import ItemsArray from './reducer_items_array';
import PocetKomponentVsetu from './reducer_pocet_komponent_v_setu';
import CenaZaSet from './reducer_cena_za_set';
import CelkovaCenaZaKomponentyVSetu from './reducer_celkova_cena_za_komponenty_v_setu';
import PocetPouzitiZaRok from './reducer_pocet_pouziti_za_rok';
import Algo_platy from './reducer_logic';

// everything inside is a piece of state
const rootReducer = combineReducers({
  items: ItemsArray,
  pocet_komponent_v_setu: PocetKomponentVsetu,
  cena_za_set: CenaZaSet,
  celkova_cena_za_komponenty_v_setu: CelkovaCenaZaKomponentyVSetu,
  pocet_pouziti_za_rok: PocetPouzitiZaRok,
  algo_platy: Algo_platy
});

export default rootReducer;
