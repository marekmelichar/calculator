import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Table_Results extends Component {

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
      vychystavani_komponenty: 20.78
    };
  }



  render() {
// console.log(this.props.celkovy_pocet_pouziti_za_rok);
    let objednavani = this.state.objednavani;
    let skladovani_centralni_sklad = this.state.skladovani_centralni_sklad;
    let skladovani_COS = this.state.skladovani_COS;
    let vychystavani = this.state.vychystavani;

    let objednavani_komponenty = this.state.objednavani_komponenty;
    let skladovani_centralni_sklad_komponenty = this.state.skladovani_centralni_sklad_komponenty;
    let skladovani_COS_komponenty = this.state.skladovani_COS_komponenty;
    let vychystavani_komponenty = this.state.vychystavani_komponenty;

    let suma = +(objednavani+skladovani_centralni_sklad+skladovani_COS+vychystavani).toFixed(2);
    let suma_komponenty = +(objednavani_komponenty+skladovani_centralni_sklad_komponenty+skladovani_COS_komponenty+vychystavani_komponenty).toFixed(2);

    return (
  	  <table className="table-results">
        <thead>
          <tr>
            <th>Srovnání nákladů na CPT sety a komponenty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Objednávání - pracovník CS</td>
            <td>CPT set</td>
            <td>{this.state.objednavani.toFixed(2)} kč</td>
            <td>Komponenty</td>
            <td>{this.state.objednavani_komponenty.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Skladování centrální sklad - pracovník CS</td>
            <td>CPT set</td>
            <td>{this.state.skladovani_centralni_sklad.toFixed(2)} kč</td>
            <td>Komponenty</td>
            <td>{this.state.skladovani_centralni_sklad_komponenty.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Skladování COS - sestra</td>
            <td>CPT set</td>
            <td>{this.state.skladovani_COS.toFixed(2)} kč</td>
            <td>Komponenty</td>
            <td>{this.state.skladovani_COS_komponenty.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Vychystávání - sestra CS</td>
            <td>CPT set</td>
            <td>{this.state.vychystavani.toFixed(2)} kč</td>
            <td>Komponenty</td>
            <td>{this.state.vychystavani_komponenty.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Celkem</td>
            <td>1ks CPT set</td>
            <td>{suma} kč</td>
            <td>Komponenty</td>
            <td>{suma_komponenty} kč</td>
          </tr>
        </tbody>
        <tbody className="finalni-uspora">
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>úspora</td>
          </tr>
          <tr>
            <td>Celkové náklady na použití u jedné operace</td>
            <td>CPT set</td>
            <td>{parseInt(this.props.cena_za_komplet_set) + suma}</td>
            <td>Komponenty</td>
            <td>{(this.props.celkova_cena_za_komponenty_v_setu_SUMA + suma_komponenty).toFixed(2)}</td>
            <td>{((parseInt(this.props.cena_za_komplet_set) + suma) - (this.props.celkova_cena_za_komponenty_v_setu_SUMA + suma_komponenty).toFixed(2)).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Celkové náklady na použití za rok</td>
            <td>1ks CPT set</td>
            <td>{((parseInt(this.props.cena_za_komplet_set) + suma) * parseInt(this.props.celkovy_pocet_pouziti_za_rok) * 12).toFixed(2)}</td>
            <td>Komponenty</td>
            <td>{((parseInt(this.props.celkova_cena_za_komponenty_v_setu_SUMA) + suma) * parseInt(this.props.celkovy_pocet_pouziti_za_rok) * 12).toFixed(2)}</td>
            <td>{(((parseInt(this.props.cena_za_komplet_set) + suma) * parseInt(this.props.celkovy_pocet_pouziti_za_rok) * 12).toFixed(2) - ((parseInt(this.props.celkova_cena_za_komponenty_v_setu_SUMA) + suma) * parseInt(this.props.celkovy_pocet_pouziti_za_rok) * 12).toFixed(2)).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  // whatever is returned here, gets in as a prop
  return {
    cena_za_komplet_set: state.cena_za_set.cena || 0,
    celkova_cena_za_komponenty_v_setu_SUMA: state.celkova_cena_za_komponenty_v_setu.cena,
    celkovy_pocet_pouziti_za_rok: state.pocet_pouziti_za_rok.pocet || 0
  };
};

export default connect(mapStateToProps, actions)(Table_Results);
