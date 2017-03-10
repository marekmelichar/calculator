/*
 * action types
 */

export const ADD_ITEM = 'ADD_ITEM';
export const POCET_KOMPONENT_V_SETU = 'POCET_KOMPONENT_V_SETU';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CENA_ZA_SET = 'CENA_ZA_SET';
export const CELKOVA_CENA_ZA_KOMPONENTY_V_SETU = 'CELKOVA_CENA_ZA_KOMPONENTY_V_SETU';
export const POCET_POUZITI_ZA_ROK = 'POCET_POUZITI_ZA_ROK';

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
  return {
    type: CENA_ZA_SET,
    cena
  };
};

export const celkova_cena_za_komponenty_v_setu = (cena) => {
  // console.log(cena);
  return {
    type: CELKOVA_CENA_ZA_KOMPONENTY_V_SETU,
    cena
  };
};

export const pocet_pouziti_za_rok = (pocet) => {
  // console.log(cena);
  return {
    type: POCET_POUZITI_ZA_ROK,
    pocet
  };
};
