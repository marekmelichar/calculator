import { ALGO_PLAT_SESTRY, POCET_POUZITI_ZA_ROK, ALGO_PLAT_SKLADNIKA } from '../actions/index';

let INITIAL_STATE = {};

let rok, mesic, tyden, den;
let mesicne_skladnik, denne_skladnik, hodinove_skladnik, minutove_skladnik;
let mesicne_sestra, denne_sestra, hodinove_sestra, minutove_sestra, stanoveny_cas, kalkulovatelny_cas, casova_rezie_na_ks, naklady_na_ks;

export default function(state = INITIAL_STATE, action) {
  // console.log(Logic);
  switch (action.type) {
    case POCET_POUZITI_ZA_ROK:
      rok = action.pocet;
      mesic = rok / 12;
      tyden = (rok / 52).toFixed(3); // M11
      den = rok / Logic.planovaci_kalendar.M2
      // console.log(rok, mesic, tyden, den);
    return state;
    break;

    case ALGO_PLAT_SKLADNIKA:
      mesicne_skladnik = parseInt(action.plat);
      denne_skladnik = mesicne_skladnik / (Logic.kalkulovatelna_pracovni_doba.N2 / 12)
      hodinove_skladnik = mesicne_skladnik / (Logic.N3 / 12)
      minutove_skladnik = hodinove_skladnik / 60
      // console.log('skladnik', minutove_skladnik);

    return state;
    break;

    case ALGO_PLAT_SESTRY:
      mesicne_sestra = parseInt(action.plat);
      denne_sestra = mesicne_sestra / (Logic.kalkulovatelna_pracovni_doba.N2 / 12)
      hodinove_sestra = mesicne_sestra / (Logic.N3 / 12)
      minutove_sestra = (hodinove_sestra / 60).toFixed(2)
      // console.log(minutove);

      // Skladovani COS - sestra
      stanoveny_cas = 5
      kalkulovatelny_cas = tyden > 50 ? stanoveny_cas : stanoveny_cas / 4 // if M11 > 50 bude to 5 else 1.25
      casova_rezie_na_ks = (kalkulovatelny_cas / tyden).toFixed(3)
      naklady_na_ks = (casova_rezie_na_ks * minutove_sestra).toFixed(2)

      console.log('sestra', naklady_na_ks);

      return({
        sestra: action.plat
      });
      break;
    default:
      // if nothing, return the last state, but instead of returning undefined, then we set null above
      return state;
  }
};

// let prumerny_pocet_pouziti_setu = {
//   rok: rok
// }
//
// console.log(rok);
