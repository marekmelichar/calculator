import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Table_Results extends Component {

  componentWillReceiveProps(nextProps) {

    this.setState({
      celkova_cena_za_komponenty_v_setu_SUMA: nextProps.celkova_cena_za_komponenty_v_setu_SUMA
    });

    if (nextProps.logika.mesicne_sestra) {
      this.setState({ mesicne_sestra: nextProps.logika.mesicne_sestra })
    }

    if (nextProps.logika.mesicne_skladnik) {
      this.setState({ mesicne_skladnik: nextProps.logika.mesicne_skladnik })
    }

    if (nextProps.logika.pouziti_za_rok) {
      this.setState({ pouziti_za_rok: nextProps.logika.pouziti_za_rok })
    }

    if (nextProps.logika.pocet_komponent_v_setu_input) {
      this.setState({ pocet_komponent_v_setu_input: nextProps.logika.pocet_komponent_v_setu_input })
    }

    if (nextProps.logika.vykon_oddeleni_za_rok_input) {
      this.setState({ vykon_oddeleni_za_rok_input: nextProps.logika.vykon_oddeleni_za_rok_input })
    }

    if (nextProps.logika.pomer_vyuziti_input) {
      this.setState({ pomer_vyuziti_input: nextProps.logika.pomer_vyuziti_input })
    }

    if (!isNaN(nextProps.logika.sestra_naklady_na_ks)) {
      this.setState({ skladovani_COS: nextProps.logika.sestra_naklady_na_ks })
    }

    if (!isNaN(nextProps.logika.sestra_naklady)) {
      this.setState({ skladovani_COS_komponenty: nextProps.logika.sestra_naklady })
    }
  }

  constructor() {
    super();
    this.state = {
      objednavani: 1.00,
      skladovani_centralni_sklad: 4.85,
      skladovani_COS: 4.11,
      vychystavani: 1.89,
      objednavani_komponenty: 11.03,
      skladovani_centralni_sklad_komponenty: 53.39,
      skladovani_COS_komponenty: 45.22,
      vychystavani_komponenty: 20.78,
      celkova_cena_za_komponenty_v_setu_SUMA: 0,
      mesicne_sestra: 34000,
      mesicne_skladnik: 25000,
      pouziti_za_rok: 216,
      pocet_komponent_v_setu_input: 11,
      vykon_oddeleni_za_rok_input: 1250,
      pomer_vyuziti_input: 40
    };
  }

  render() {

    // console.log('table of results',
    //   this.state.mesicne_sestra,
    //   this.state.mesicne_skladnik,
    //   this.state.pouziti_za_rok,
    //   this.state.pocet_komponent_v_setu_input,
    //   this.state.vykon_oddeleni_za_rok_input,
    //   this.state.pomer_vyuziti_input
    // );

    let objednavani = this.state.objednavani;
    let skladovani_centralni_sklad = this.state.skladovani_centralni_sklad;
    let skladovani_COS = this.state.skladovani_COS;
    let vychystavani = this.state.vychystavani;

    let objednavani_komponenty = this.state.objednavani_komponenty;
    let skladovani_centralni_sklad_komponenty = this.state.skladovani_centralni_sklad_komponenty;
    let skladovani_COS_komponenty = this.state.skladovani_COS_komponenty;
    let vychystavani_komponenty = this.state.vychystavani_komponenty;

    // let suma = +(objednavani+skladovani_centralni_sklad+skladovani_COS+vychystavani).toFixed(2);
    // let suma_komponenty = +(objednavani_komponenty+skladovani_centralni_sklad_komponenty+skladovani_COS_komponenty+vychystavani_komponenty).toFixed(2);

    //
    // LOGIKA
    //

    let pouziti_za_rok_input = this.state.pouziti_za_rok, pouziti_za_mesic, pouziti_za_tyden, pouziti_za_den;
    let mesicne_skladnik = this.state.mesicne_skladnik, denne_skladnik, hodinove_skladnik, minutove_skladnik;
    let mesicne_sestra = this.state.mesicne_sestra, denne_sestra, hodinove_sestra, minutove_sestra, prijem_stanoveny_cas, prijem_kalkulovatelny_cas, prijem_casova_rezie_na_ks, prijem_naklady_na_ks, prijem_casova_rezie, prijem_naklady;
    let pocet_komponent_v_setu_input = this.state.pocet_komponent_v_setu_input;
    let expirace_stanoveny_cas, expirace_kalkulovatelny_cas, expirace_casova_rezie_na_kus, expirace_naklady_na_ks, expirace_casova_rezie, expirace_naklady;
    let M2 = Logic.planovaci_kalendar.M2;
    let vykon_oddeleni_za_rok_input = this.state.vykon_oddeleni_za_rok_input, pomer_vyuziti_input = this.state.pomer_vyuziti_input;
    let M22, M23, M26, M28;
    let inventarizace_stanoveny_cas, inventarizace_kalkulovany_cas, inventarizace_casova_rezie_na_kus, inventarizace_naklady_na_kus, inventarizace_casova_rezie, inventarizace_naklady;
    let skladovani_COS_sestra_naklady_na_kus, skladovani_COS_sestra_naklady;
    let objednavani_stanoveny_cas, objednavani_kalkulovatelny_cas, objednavani_casova_rezie_na_ks, objednavani_naklady_na_ks, objednavani_casova_rezie, objednavani_naklady;
    let skladovani_prijem_stanoveny_cas, skladovani_prijem_kalkulovatelny_cas, skladovani_prijem_casova_rezie_na_ks, skladovani_prijem_naklady_na_ks, skladovani_prijem_casova_rezie, skladovani_prijem_naklady;
    let skladovani_vydej_stanoveny_cas, skladovani_vydej_kalkulovatelny_cas, skladovani_vydej_casova_rezie_na_ks, skladovani_vydej_naklady_na_ks, skladovani_vydej_casova_rezie, skladovani_vydej_naklady;
    let skladovani_kontrola_expirace_stanoveny_cas, skladovani_kontrola_expirace_kalkulovany_cas, skladovani_kontrola_expirace_casova_rezie_na_ks, skladovani_kontrola_expirace_naklady_na_ks, skladovani_kontrola_expirace_casova_rezie, skladovani_kontrola_expirace_naklady;
    let skladovani_inventarizace_stanoveny_cas, skladovani_inventarizace_kalkulovany_cas, skladovani_inventarizace_casova_rezie_na_ks, skladovani_inventarizace_naklady_na_ks, skladovani_inventarizace_casova_rezie, skladovani_inventarizace_naklady, skladovani_inventarizace_celkove_naklady_na_ks, skladovani_inventarizace_celkove_naklady;
    let vychystavani_ze_skladu_na_sale_stanoveny_cas, vychystavani_ze_skladu_na_sale_kalkulovany_cas, vychystavani_ze_skladu_na_sale_casova_rezie_na_ks, vychystavani_ze_skladu_na_sale_naklady_na_ks, vychystavani_ze_skladu_na_sale_casova_rezie, vychystavani_ze_skladu_na_sale_naklady;
    let vychystavani_evidence_stanoveny_cas, vychystavani_evidence_kalkulovany_cas, vychystavani_evidence_casova_rezie_na_ks, vychystavani_evidence_naklady_na_ks, vychystavani_evidence_casova_rezie, vychystavani_evidence_naklady;


    //
    // LOGIKA PRO POCET_POUZITI_ZA_ROK
    //
    pouziti_za_mesic = pouziti_za_rok_input / 12;
    pouziti_za_tyden = (pouziti_za_rok_input / 52).toFixed(3); // M11
    pouziti_za_den = pouziti_za_rok_input / M2

    //
    // LOGIKA PRO PLAT SKLADNIKA
    //
    denne_skladnik = mesicne_skladnik / (Logic.kalkulovatelna_pracovni_doba.N2 / 12)
    hodinove_skladnik = mesicne_skladnik / (Logic.N3 / 12)
    minutove_skladnik = hodinove_skladnik / 60

    //
    // LOGIKA PRO M28
    //
    // M28
    M22 = 100 - pomer_vyuziti_input
    M23 = 20
    M26 = 35
    M28 = (pomer_vyuziti_input * vykon_oddeleni_za_rok_input) * M23 + (M22 * vykon_oddeleni_za_rok_input) * M26

    //
    // LOGIKA PRO ALGO_PLAT_SESTRY
    //
    denne_sestra = mesicne_sestra / (Logic.kalkulovatelna_pracovni_doba.N2 / 12)
    hodinove_sestra = mesicne_sestra / (Logic.N3 / 12)
    minutove_sestra = (hodinove_sestra / 60).toFixed(2)

    // Objednavani - pracovnik CS - TABULKA :

    // 1. radek - Objednavani
    objednavani_stanoveny_cas = 5
    objednavani_kalkulovatelny_cas = pouziti_za_tyden > 50 ? objednavani_stanoveny_cas : objednavani_stanoveny_cas / 4 // if M11 > 50 bude to 5 else 1.25
    objednavani_casova_rezie_na_ks = parseFloat((objednavani_kalkulovatelny_cas / pouziti_za_tyden).toFixed(3))
    objednavani_naklady_na_ks = parseFloat((objednavani_casova_rezie_na_ks * minutove_skladnik).toFixed(2))
    objednavani_casova_rezie = parseFloat(objednavani_casova_rezie_na_ks * this.state.pocet_komponent_v_setu_input)
    objednavani_naklady = parseFloat((objednavani_casova_rezie * minutove_skladnik).toFixed(2))

    // Skladování centrální sklad - pracovník CS - TABULKA :
    // 1.radek - Prijem
    skladovani_prijem_stanoveny_cas = 4
    skladovani_prijem_kalkulovatelny_cas = pouziti_za_tyden > 50 ? skladovani_prijem_stanoveny_cas : skladovani_prijem_stanoveny_cas / 4 // if M11 > 50 bude to 5 else 1.25
    skladovani_prijem_casova_rezie_na_ks = parseFloat((skladovani_prijem_kalkulovatelny_cas / pouziti_za_tyden).toFixed(3))
    skladovani_prijem_naklady_na_ks = parseFloat((skladovani_prijem_casova_rezie_na_ks * minutove_skladnik).toFixed(2))
    skladovani_prijem_casova_rezie = skladovani_prijem_casova_rezie_na_ks * this.state.pocet_komponent_v_setu_input
    skladovani_prijem_naklady = parseFloat((skladovani_prijem_casova_rezie * minutove_skladnik).toFixed(2))

    // 2. radek - Vydej
    skladovani_vydej_stanoveny_cas = 4
    skladovani_vydej_kalkulovatelny_cas = pouziti_za_tyden > 50 ? skladovani_vydej_stanoveny_cas : skladovani_vydej_stanoveny_cas / 4 // if M11 > 50 bude to 5 else 1.25
    skladovani_vydej_casova_rezie_na_ks = parseFloat((skladovani_vydej_kalkulovatelny_cas / pouziti_za_tyden).toFixed(3))
    skladovani_vydej_naklady_na_ks = parseFloat((skladovani_vydej_casova_rezie_na_ks * minutove_skladnik).toFixed(2))
    skladovani_vydej_casova_rezie = skladovani_vydej_casova_rezie_na_ks * this.state.pocet_komponent_v_setu_input
    skladovani_vydej_naklady = parseFloat((skladovani_vydej_casova_rezie * minutove_skladnik).toFixed(2))

    // 3. radek - Kontrola expirace
    skladovani_kontrola_expirace_stanoveny_cas = 4
    skladovani_kontrola_expirace_kalkulovany_cas = skladovani_kontrola_expirace_stanoveny_cas
    skladovani_kontrola_expirace_casova_rezie_na_ks = parseFloat((skladovani_kontrola_expirace_kalkulovany_cas / pouziti_za_tyden).toFixed(3))
    skladovani_kontrola_expirace_naklady_na_ks = parseFloat((skladovani_kontrola_expirace_casova_rezie_na_ks * minutove_skladnik).toFixed(2))
    skladovani_kontrola_expirace_casova_rezie = skladovani_kontrola_expirace_casova_rezie_na_ks * this.state.pocet_komponent_v_setu_input
    skladovani_kontrola_expirace_naklady = parseFloat((skladovani_kontrola_expirace_casova_rezie * minutove_skladnik).toFixed(2))

    // 4. radek - Inventarizace - 2 sestry
    skladovani_inventarizace_stanoveny_cas = 2.5
    skladovani_inventarizace_kalkulovany_cas = skladovani_inventarizace_stanoveny_cas
    skladovani_inventarizace_casova_rezie_na_ks = skladovani_inventarizace_kalkulovany_cas / this.state.pouziti_za_rok
    skladovani_inventarizace_naklady_na_ks = parseFloat((skladovani_inventarizace_casova_rezie_na_ks * minutove_skladnik).toFixed(2))
    skladovani_inventarizace_casova_rezie = skladovani_inventarizace_casova_rezie_na_ks * this.state.pocet_komponent_v_setu_input
    skladovani_inventarizace_naklady = parseFloat((skladovani_inventarizace_casova_rezie * minutove_skladnik).toFixed(2))

    // CELKEM - Inventarizace
    skladovani_inventarizace_celkove_naklady_na_ks = parseFloat((skladovani_prijem_naklady_na_ks + skladovani_vydej_naklady_na_ks + skladovani_kontrola_expirace_naklady_na_ks + skladovani_inventarizace_naklady_na_ks).toFixed(2));
    skladovani_inventarizace_celkove_naklady = parseFloat((skladovani_prijem_naklady + skladovani_vydej_naklady + skladovani_kontrola_expirace_naklady + skladovani_inventarizace_naklady).toFixed(2));

    // Vychystavani - sestra CS TABULKA

    // 1.radek - Vychystavani ze skladu na sale
    vychystavani_ze_skladu_na_sale_stanoveny_cas = 10
    vychystavani_ze_skladu_na_sale_kalkulovany_cas = vychystavani_ze_skladu_na_sale_stanoveny_cas
    vychystavani_ze_skladu_na_sale_casova_rezie_na_ks = vychystavani_ze_skladu_na_sale_kalkulovany_cas / 60
    vychystavani_ze_skladu_na_sale_naklady_na_ks = parseFloat((vychystavani_ze_skladu_na_sale_casova_rezie_na_ks * minutove_sestra).toFixed(2))
    vychystavani_ze_skladu_na_sale_casova_rezie = vychystavani_ze_skladu_na_sale_casova_rezie_na_ks * this.state.pocet_komponent_v_setu_input
    vychystavani_ze_skladu_na_sale_naklady = parseFloat((vychystavani_ze_skladu_na_sale_casova_rezie * minutove_sestra).toFixed(2))

    // 2.radek - Vychystavani ze skladu na sale
    vychystavani_evidence_stanoveny_cas = 15
    vychystavani_evidence_kalkulovany_cas = vychystavani_evidence_stanoveny_cas
    vychystavani_evidence_casova_rezie_na_ks = vychystavani_evidence_stanoveny_cas / 60
    vychystavani_evidence_naklady_na_ks = parseFloat((vychystavani_evidence_casova_rezie_na_ks * minutove_sestra).toFixed(2))
    vychystavani_evidence_casova_rezie = vychystavani_evidence_casova_rezie_na_ks * this.state.pocet_komponent_v_setu_input
    vychystavani_evidence_naklady = parseFloat((vychystavani_evidence_casova_rezie * minutove_sestra).toFixed(2))

    // Vychystavani - sestra CS CELKEM
    let vychystavani_evidence_celkove_naklady_na_ks, vychystavani_evidence_celkove_naklady;
    vychystavani_evidence_celkove_naklady_na_ks = parseFloat((vychystavani_ze_skladu_na_sale_naklady_na_ks + vychystavani_evidence_naklady_na_ks).toFixed(2))
    vychystavani_evidence_celkove_naklady = parseFloat((vychystavani_ze_skladu_na_sale_naklady + vychystavani_evidence_naklady).toFixed(2))






    // Skladovani COS - sestra - TABULKA :

    // 1. radek naklady na prijem(prevzeti)
    prijem_stanoveny_cas = 5
    prijem_kalkulovatelny_cas = pouziti_za_tyden > 50 ? prijem_stanoveny_cas : prijem_stanoveny_cas / 4 // if M11 > 50 bude to 5 else 1.25
    prijem_casova_rezie_na_ks = (prijem_kalkulovatelny_cas / pouziti_za_tyden).toFixed(3)
    prijem_naklady_na_ks = parseFloat((prijem_casova_rezie_na_ks * minutove_sestra).toFixed(2))
    prijem_casova_rezie = prijem_casova_rezie_na_ks * pocet_komponent_v_setu_input
    prijem_naklady = parseFloat((prijem_casova_rezie * minutove_sestra).toFixed(2))

    // 2. radek - Kontrola expirace
    expirace_stanoveny_cas = 45
    expirace_kalkulovatelny_cas = expirace_stanoveny_cas
    expirace_casova_rezie_na_kus = (expirace_kalkulovatelny_cas / (M28 / M2).toFixed(2)) * 100
    expirace_naklady_na_ks = parseFloat((expirace_casova_rezie_na_kus * minutove_sestra).toFixed(2))
    expirace_casova_rezie = expirace_casova_rezie_na_kus * pocet_komponent_v_setu_input
    expirace_naklady = parseFloat((expirace_casova_rezie * minutove_sestra).toFixed(2))

    // 3. radek - Inventarizace
    inventarizace_stanoveny_cas = 150
    inventarizace_kalkulovany_cas = inventarizace_stanoveny_cas
    inventarizace_casova_rezie_na_kus = ((2 * inventarizace_kalkulovany_cas) / (M28 / M2 * 7)) * 100
    inventarizace_naklady_na_kus = parseFloat((inventarizace_casova_rezie_na_kus * minutove_sestra).toFixed(2))
    inventarizace_casova_rezie = inventarizace_casova_rezie_na_kus * pocet_komponent_v_setu_input
    inventarizace_naklady = parseFloat((inventarizace_casova_rezie * minutove_sestra).toFixed(2))

    // SUMY
    skladovani_COS_sestra_naklady_na_kus = (prijem_naklady_na_ks + expirace_naklady_na_ks + inventarizace_naklady_na_kus).toFixed(2)
    skladovani_COS_sestra_naklady = (prijem_naklady + expirace_naklady + inventarizace_naklady).toFixed(2)

    let suma, suma_komponenty;
    suma = (parseFloat(objednavani_naklady_na_ks) + parseFloat(skladovani_inventarizace_celkove_naklady_na_ks) + parseFloat(skladovani_COS_sestra_naklady_na_kus) + parseFloat(vychystavani_evidence_celkove_naklady_na_ks)).toFixed(2)
    suma_komponenty = parseFloat(objednavani_naklady) + parseFloat(skladovani_inventarizace_celkove_naklady) + parseFloat(skladovani_COS_sestra_naklady) + parseFloat(vychystavani_evidence_celkove_naklady)

    let vystup_celkove_naklady_u_jedne_operace_CPT_set = parseFloat(this.props.cena_za_komplet_set) + parseFloat(suma)
    let vystup_celkove_naklady_u_jedne_operace_Komponenty = (parseFloat(this.props.celkova_cena_za_komponenty_v_setu_SUMA) + parseFloat(suma_komponenty)).toFixed(2)
    let vystup_celkove_naklady_za_rok_1_CPT_set = ((parseFloat(this.props.cena_za_komplet_set) + parseFloat(suma)) * parseFloat(this.props.celkovy_pocet_pouziti_za_rok) * 12).toFixed(2)
    let vystup_celkove_naklady_za_rok_Komponenty = ((parseFloat(this.props.celkova_cena_za_komponenty_v_setu_SUMA) + parseFloat(suma_komponenty)) * parseFloat(this.props.celkovy_pocet_pouziti_za_rok) * 12).toFixed(2)

    return (
      <div>
        <div className="vystup wrap column">
          <h1>NÁKLADY NA MANIPULACI</h1>
          <h2>NÁKLADY NA MANIPULACI</h2>
      	  <table className="table-results">
            <tbody>
              <tr>
                <td>Objednávání - pracovník CS</td>
                <td>CPT set</td>
                <td>{objednavani_naklady_na_ks} kč</td>
                <td>Komponenty</td>
                <td>{objednavani_naklady}</td>
              </tr>
              <tr>
                <td>Skladování centrální sklad - pracovník CS</td>
                <td>CPT set</td>
                <td>{skladovani_inventarizace_celkove_naklady_na_ks} kč</td>
                <td>Komponenty</td>
                <td>{skladovani_inventarizace_celkove_naklady}</td>
              </tr>
              <tr>
                <td>Skladování COS - sestra</td>
                <td>CPT set</td>
                <td>{skladovani_COS_sestra_naklady_na_kus} kč</td>
                <td>Komponenty</td>
                <td>{skladovani_COS_sestra_naklady}</td>
              </tr>
              <tr>
                <td>Vychystávání - sestra CS</td>
                <td>CPT set</td>
                <td>{vychystavani_evidence_celkove_naklady_na_ks} kč</td>
                <td>Komponenty</td>
                <td>{vychystavani_evidence_celkove_naklady}</td>
              </tr>
              <tr>
                <td>Celkem</td>
                <td>1ks CPT set</td>
                <td>{suma} kč</td>
                <td>Komponenty</td>
                <td>{suma_komponenty.toFixed(2)} kč</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rozdil_uspora wrap column">
          <h1>VÝSLEDNÝ ROZDÍL/ÚSPORA</h1>
          <table className="rozdil_table">
            <tbody>
              <tr>
                {/* <td style={{width: 40 + '%'}}></td>
                <td style={{width: 10 + '%'}}></td>
                <td style={{width: 10 + '%'}}></td>
                <td style={{width: 10 + '%'}}></td>
                <td style={{width: 10 + '%'}}></td>
                <td style={{width: 10 + '%'}}>rozdíl (úspora)</td> */}
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>rozdíl (úspora)</td>
              </tr>
              <tr>
                <td>Celkové náklady na použití u jedné operace</td>
                <td>CPT set</td>
                <td>{vystup_celkove_naklady_u_jedne_operace_CPT_set}</td>
                <td>Komponenty</td>
                <td>{vystup_celkove_naklady_u_jedne_operace_Komponenty}</td>
                <td>{(vystup_celkove_naklady_u_jedne_operace_CPT_set - vystup_celkove_naklady_u_jedne_operace_Komponenty).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Celkové náklady na použití za rok</td>
                <td>1ks CPT set</td>
                <td>{vystup_celkove_naklady_za_rok_1_CPT_set}</td>
                <td>Komponenty</td>
                <td>{vystup_celkove_naklady_za_rok_Komponenty}</td>
                <td>{(vystup_celkove_naklady_za_rok_1_CPT_set - vystup_celkove_naklady_za_rok_Komponenty).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
    // console.log();
  }
}

const mapStateToProps = state => {
  // console.log(state.logic);
  // whatever is returned here, gets in as a prop
  return {
    cena_za_komplet_set: state.cena_za_set.cena || 0,
    celkova_cena_za_komponenty_v_setu_SUMA: state.celkova_cena_za_komponenty_v_setu.cena || 0,
    celkovy_pocet_pouziti_za_rok: state.pocet_pouziti_za_rok.pocet || 0,
    logika: state.logic
    // skladovani_COS_sestra: state.algo_platy.sestra
  };
};

export default connect(mapStateToProps, actions)(Table_Results);





































// import React, { Component } from 'react';
//
// import { connect } from 'react-redux';
//
// import * as actions from '../../actions';
//
// class Table_Results extends Component {
//
//   componentWillReceiveProps(nextProps) {
//     // console.log(nextProps.skladovani_COS_sestra);
//     this.setState({
//       celkova_cena_za_komponenty_v_setu_SUMA: nextProps.celkova_cena_za_komponenty_v_setu_SUMA,
//     });
//
//     if (!isNaN(nextProps.logika.sestra_naklady_na_ks)) {
//       this.setState({ skladovani_COS: nextProps.logika.sestra_naklady_na_ks })
//     }
//
//     if (!isNaN(nextProps.logika.sestra_naklady)) {
//       this.setState({ skladovani_COS_komponenty: nextProps.logika.sestra_naklady })
//     }
//   }
//
//   constructor() {
//     super();
//     this.state = {
//       objednavani: 1.00,
//       skladovani_centralni_sklad: 4.85,
//       skladovani_COS: 4.11,
//       vychystavani: 1.89,
//       objednavani_komponenty: 11.03,
//       skladovani_centralni_sklad_komponenty: 53.39,
//       skladovani_COS_komponenty: 45.22,
//       vychystavani_komponenty: 20.78,
//       celkova_cena_za_komponenty_v_setu_SUMA: 0
//     };
//   }
//
//   render() {
//
//     let objednavani = this.state.objednavani;
//     let skladovani_centralni_sklad = this.state.skladovani_centralni_sklad;
//     let skladovani_COS = this.state.skladovani_COS;
//     let vychystavani = this.state.vychystavani;
//
//     let objednavani_komponenty = this.state.objednavani_komponenty;
//     let skladovani_centralni_sklad_komponenty = this.state.skladovani_centralni_sklad_komponenty;
//     let skladovani_COS_komponenty = this.state.skladovani_COS_komponenty;
//     let vychystavani_komponenty = this.state.vychystavani_komponenty;
//
//     let suma = +(objednavani+skladovani_centralni_sklad+skladovani_COS+vychystavani).toFixed(2);
//     let suma_komponenty = +(objednavani_komponenty+skladovani_centralni_sklad_komponenty+skladovani_COS_komponenty+vychystavani_komponenty).toFixed(2);
//
//     return (
//   	  <table className="table-results">
//         <thead>
//           <tr>
//             <th>Srovnání nákladů na CPT sety a komponenty</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Objednávání - pracovník CS</td>
//             <td>CPT set</td>
//             <td>{this.state.objednavani.toFixed(2)} kč</td>
//             <td>Komponenty</td>
//             <td>{this.state.objednavani_komponenty.toFixed(2)}</td>
//           </tr>
//           <tr>
//             <td>Skladování centrální sklad - pracovník CS</td>
//             <td>CPT set</td>
//             <td>{this.state.skladovani_centralni_sklad.toFixed(2)} kč</td>
//             <td>Komponenty</td>
//             <td>{this.state.skladovani_centralni_sklad_komponenty.toFixed(2)}</td>
//           </tr>
//           <tr>
//             <td>Skladování COS - sestra</td>
//             <td>CPT set</td>
//             <td>{this.state.skladovani_COS.toFixed(2)} kč</td>
//             <td>Komponenty</td>
//             <td>{this.state.skladovani_COS_komponenty}</td>
//           </tr>
//           <tr>
//             <td>Vychystávání - sestra CS</td>
//             <td>CPT set</td>
//             <td>{this.state.vychystavani.toFixed(2)} kč</td>
//             <td>Komponenty</td>
//             <td>{this.state.vychystavani_komponenty.toFixed(2)}</td>
//           </tr>
//           <tr>
//             <td>Celkem</td>
//             <td>1ks CPT set</td>
//             <td>{suma} kč</td>
//             <td>Komponenty</td>
//             <td>{suma_komponenty} kč</td>
//           </tr>
//         </tbody>
//         <tbody className="finalni-uspora">
//           <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td>úspora</td>
//           </tr>
//           <tr>
//             <td>Celkové náklady na použití u jedné operace</td>
//             <td>CPT set</td>
//             <td>{parseInt(this.props.cena_za_komplet_set) + suma}</td>
//             <td>Komponenty</td>
//             <td>{(parseInt(this.props.celkova_cena_za_komponenty_v_setu_SUMA) + suma_komponenty).toFixed(2)}</td>
//             <td>{((parseInt(this.props.cena_za_komplet_set) + suma) - (this.props.celkova_cena_za_komponenty_v_setu_SUMA + suma_komponenty).toFixed(2)).toFixed(2)}</td>
//           </tr>
//           <tr>
//             <td>Celkové náklady na použití za rok</td>
//             <td>1ks CPT set</td>
//             <td>{((parseInt(this.props.cena_za_komplet_set) + suma) * parseInt(this.props.celkovy_pocet_pouziti_za_rok) * 12).toFixed(2)}</td>
//             <td>Komponenty</td>
//             <td>{((parseInt(this.props.celkova_cena_za_komponenty_v_setu_SUMA) + suma_komponenty) * parseInt(this.props.celkovy_pocet_pouziti_za_rok) * 12).toFixed(2)}</td>
//             <td>{(((parseInt(this.props.cena_za_komplet_set) + suma) * parseInt(this.props.celkovy_pocet_pouziti_za_rok) * 12).toFixed(2) - ((parseInt(this.props.celkova_cena_za_komponenty_v_setu_SUMA) + suma) * parseInt(this.props.celkovy_pocet_pouziti_za_rok) * 12).toFixed(2)).toFixed(2)}</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   }
// }
//
// const mapStateToProps = state => {
//   console.log(state.logic);
//   // whatever is returned here, gets in as a prop
//   return {
//     cena_za_komplet_set: state.cena_za_set.cena || 0,
//     celkova_cena_za_komponenty_v_setu_SUMA: state.celkova_cena_za_komponenty_v_setu.cena || 0,
//     celkovy_pocet_pouziti_za_rok: state.pocet_pouziti_za_rok.pocet || 0,
//     logika: state.logic
//     // skladovani_COS_sestra: state.algo_platy.sestra
//   };
// };
//
// export default connect(mapStateToProps, actions)(Table_Results);
