/*
 * action types
 */

export const ADD_ITEM = 'ADD_ITEM';
export const POCET_KOMPONENT_V_SETU = 'POCET_KOMPONENT_V_SETU';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CENA_ZA_SET = 'CENA_ZA_SET';
export const CELKOVA_CENA_ZA_KOMPONENTY_V_SETU = 'CELKOVA_CENA_ZA_KOMPONENTY_V_SETU';
export const POCET_POUZITI_ZA_ROK = 'POCET_POUZITI_ZA_ROK';
export const ALGO_PLAT_SESTRY = 'ALGO_PLAT_SESTRY';
export const ALGO_PLAT_SKLADNIKA = 'ALGO_PLAT_SKLADNIKA';
export const VYKONY_ODDELENI_ZA_ROK = 'VYKONY_ODDELENI_ZA_ROK';
export const POMER_VYUZITI = 'POMER_VYUZITI';
export const EDIT_ITEM = 'EDIT_ITEM';
// export const SAVE = 'SAVE';
// export const LOAD_JSON = 'LOAD_JSON';

export const addItem = (komponenta, pocet_ks, cena_ks, cena_celkem) => {
  return {
    type: ADD_ITEM,
    komponenta,
    pocet_ks,
    cena_ks,
    cena_celkem
  };
};

export const pocet_komponent_v_setu_SUMA = (suma) => {
  // console.log('pocet_komponent_v_setu_SUMA', suma);
  return {
    type: POCET_KOMPONENT_V_SETU,
    suma
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  };
};

export const cena_za_set = (cena) => {
  // console.log('cena za set', cena);
  return {
    type: CENA_ZA_SET,
    cena
  };
};

export const celkova_cena_za_komponenty_v_setu = (cena) => {
  // console.log('celkova_cena_za_komponenty_v_setu', cena);
  return {
    type: CELKOVA_CENA_ZA_KOMPONENTY_V_SETU,
    cena
  };
};

export const pocet_pouziti_za_rok = (pocet) => {
  // console.log('pocet pouziti za rok', pocet);
  return {
    type: POCET_POUZITI_ZA_ROK,
    pocet
  };
};

export const algo_plat_sestry = (plat) => {
  // console.log('plat sestry', plat);
  return {
    type: ALGO_PLAT_SESTRY,
    plat
  };
};

export const algo_plat_skladnika = (plat) => {
  // console.log('plat skladnika', plat);
  return {
    type: ALGO_PLAT_SKLADNIKA,
    plat
  };
};

export const vykony_na_oddeleni_za_rok = (vykon) => {
  // console.log(plat);
  return {
    type: VYKONY_ODDELENI_ZA_ROK,
    vykon
  };
};

export const pomer_vyuziti = (pomer) => {
  // console.log(plat);
  return {
    type: POMER_VYUZITI,
    pomer
  };
};

export const edit_item = (id, komponenta, pocet_ks, cena_ks, cena_celkem) => {
  // console.log(id, komponenta, pocet_ks, cena_ks, cena_celkem);
  return {
    type: EDIT_ITEM,
    id,
    komponenta,
    pocet_ks,
    cena_ks,
    cena_celkem
  };
};
