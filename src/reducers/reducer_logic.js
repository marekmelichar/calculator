import { ALGO_PLAT_SESTRY, POCET_POUZITI_ZA_ROK, ALGO_PLAT_SKLADNIKA, POCET_KOMPONENT_V_SETU, VYKONY_ODDELENI_ZA_ROK, POMER_VYUZITI } from '../actions/index';

let INITIAL_STATE = {};

let a;
let rok, mesic, tyden, den;
let mesicne_skladnik, denne_skladnik, hodinove_skladnik, minutove_skladnik;
let mesicne_sestra, denne_sestra, hodinove_sestra, minutove_sestra, prijem_stanoveny_cas, prijem_kalkulovatelny_cas, prijem_casova_rezie_na_ks, prijem_naklady_na_ks, prijem_casova_rezie, prijem_naklady;
let pocet_komponent_v_setu_input;
let expirace_stanoveny_cas, expirace_kalkulovatelny_cas, expirace_casova_rezie_na_kus, expirace_naklady_na_ks, expirace_casova_rezie, expirace_naklady;
let M2 = Logic.planovaci_kalendar.M2;
let vykon_oddeleni_za_rok_input, pomer_vyuziti_input;
let M22, M23, M26, M28;
let inventarizace_stanoveny_cas, inventarizace_kalkulovany_cas, inventarizace_casova_rezie_na_kus, inventarizace_naklady_na_kus, inventarizace_casova_rezie, inventarizace_naklady;
let skladovani_COS_sestra_naklady_na_kus;

export default function(state = INITIAL_STATE, action) {
  // console.log(mesicne_sestra, expirace_casova_rezie);


  switch (action.type) {
    case POCET_POUZITI_ZA_ROK:
      rok = action.pocet;
      mesic = rok / 12;
      tyden = (rok / 52).toFixed(3); // M11
      den = rok / M2
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

    case POCET_KOMPONENT_V_SETU:
      pocet_komponent_v_setu_input = action.suma

      return({
        suma: action.suma
      });
      break;

    case VYKONY_ODDELENI_ZA_ROK:
      vykon_oddeleni_za_rok_input = action.vykon

      // M28
      M22 = 100 - pomer_vyuziti_input
      M23 = 20
      M26 = 35
      M28 = (pomer_vyuziti_input * vykon_oddeleni_za_rok_input) * M23 + (M22 * vykon_oddeleni_za_rok_input) * M26

      return({
        vykon: action.vykon
      });
      break;

    case POMER_VYUZITI:
      pomer_vyuziti_input = action.pomer

      // M28
      M22 = 100 - pomer_vyuziti_input
      M23 = 20
      M26 = 35
      M28 = (pomer_vyuziti_input * vykon_oddeleni_za_rok_input) * M23 + (M22 * vykon_oddeleni_za_rok_input) * M26

      return({
        pomer: action.pomer
      });
      break;

    case ALGO_PLAT_SESTRY:
      mesicne_sestra = parseInt(action.plat);
      denne_sestra = mesicne_sestra / (Logic.kalkulovatelna_pracovni_doba.N2 / 12)
      hodinove_sestra = mesicne_sestra / (Logic.N3 / 12)
      minutove_sestra = (hodinove_sestra / 60).toFixed(2)

      // Skladovani COS - sestra - TABULKA :

      // 1. radek naklady na prijem(prevzeti)
      prijem_stanoveny_cas = 5
      prijem_kalkulovatelny_cas = tyden > 50 ? prijem_stanoveny_cas : prijem_stanoveny_cas / 4 // if M11 > 50 bude to 5 else 1.25
      prijem_casova_rezie_na_ks = (prijem_kalkulovatelny_cas / tyden).toFixed(3)
      prijem_naklady_na_ks = (prijem_casova_rezie_na_ks * minutove_sestra).toFixed(2)
      prijem_casova_rezie = prijem_casova_rezie_na_ks * pocet_komponent_v_setu_input
      prijem_naklady = (prijem_casova_rezie * minutove_sestra).toFixed(2)

      // 2. radek - Kontrola expirace
      expirace_stanoveny_cas = 45
      expirace_kalkulovatelny_cas = expirace_stanoveny_cas
      expirace_casova_rezie_na_kus = (expirace_kalkulovatelny_cas / (M28 / M2).toFixed(2)) * 100
      expirace_naklady_na_ks = (expirace_casova_rezie_na_kus * minutove_sestra).toFixed(2)
      expirace_casova_rezie = expirace_casova_rezie_na_kus * pocet_komponent_v_setu_input
      expirace_naklady = (expirace_casova_rezie * minutove_sestra).toFixed(2)

      // 3. radek - Inventarizace
      inventarizace_stanoveny_cas = 150
      inventarizace_kalkulovany_cas = inventarizace_stanoveny_cas
      inventarizace_casova_rezie_na_kus = ((2 * inventarizace_kalkulovany_cas) / (M28 / M2 * 7)) * 100
      inventarizace_naklady_na_kus = parseFloat((inventarizace_casova_rezie_na_kus * minutove_sestra).toFixed(2))
      inventarizace_casova_rezie = inventarizace_casova_rezie_na_kus * pocet_komponent_v_setu_input
      inventarizace_naklady = (inventarizace_casova_rezie * minutove_sestra).toFixed(2)

      // SUMY
      skladovani_COS_sestra_naklady_na_kus = inventarizace_naklady_na_kus

      console.log('sestra', skladovani_COS_sestra_naklady_na_kus);

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
