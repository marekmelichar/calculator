import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Table_2 extends Component {
  componentWillReceiveProps(nextProps) {
    // console.log('nextProps.celkova__cena_za_komponenty_v_setu', nextProps.celkova__cena_za_komponenty_v_setu);

    if (nextProps.celkova__cena_za_komponenty_v_setu.decision) {
      this.setState({
        pouziti: nextProps.pocet__pouziti_za_rok.pocet,
        komponenty: nextProps.pocet__komponent_v_setu.suma,
        cena_za_set: nextProps.cena__za_set.cena,
        celkova_cena: nextProps.celkova__cena_za_komponenty_v_setu.cena
      })
    }

  }

  constructor() {
    super();
    this.state = {
      pouziti: 0,
      komponenty: 0,
      cena_za_set: 0,
      celkova_cena: 0
    };

    this.handlePouziti = this.handlePouziti.bind(this);
    this.handleKomponenty = this.handleKomponenty.bind(this);
    this.handleCenaZaSet = this.handleCenaZaSet.bind(this);
    this.handleCelkovaCena = this.handleCelkovaCena.bind(this);
  }

  handlePouziti(event) {
    let value = event.target.value;
    this.setState({pouziti: value});
    this.props.pocet_pouziti_za_rok(value);
  }

  handleKomponenty(event) {
    let value = event.target.value;
    this.setState({komponenty: value});
    this.props.pocet_komponent_v_setu_SUMA(value);
  }

  handleCenaZaSet(event) {
    let value = event.target.value;
    this.setState({cena_za_set: value});
    this.props.cena_za_set(value ? value : this.state.cena_za_set);
  }

  handleCelkovaCena(event) {
    this.setState({celkova_cena: event.target.value});
    this.props.celkova_cena_za_komponenty_v_setu(event.target.value, 1)
  }

  render() {
    let pocet_komponent_v_setu_array = [];
    let ceny_komponent_v_setu_array = [];

    if (this.props.items) {
      let items = this.props.items;
      items.forEach(function(item) {
        if(typeof item !== 'undefined') {
          pocet_komponent_v_setu_array.push(parseInt(item.pocet_ks))
          ceny_komponent_v_setu_array.push(parseInt(item.cena_celkem))
        }
      })
    }

    let pocet_komponent_v_setu_SUMA = pocet_komponent_v_setu_array.reduce((a, b) => a + b, 0);
    let ceny_komponent_v_setu_SUMA = ceny_komponent_v_setu_array.reduce((a, b) => a + b, 0);

    return (
  	  <table className="table-2 cpt-set">
        <thead>
          <tr>
            <th className="text-left" style={{width: 70 + '%'}}>CPT set</th>
            <th className="text-right" style={{width: 30 + '%'}}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Průměrný počet použití za rok</td>
            <td><input type="text" value={this.state.pouziti} onChange={this.handlePouziti} /></td>
            {/* <td><NumberFormat displayType={'input'} decimalSeparator={","} value={this.state.pouziti.toString()} thousandSeparator={" "} onChange={this.handlePouziti} /></td> */}

          </tr>
          <tr>
            <td>Počet komponent v setu</td>
            {/* in case of rewriting the value only, use this line */}
            <td><input type="text" value={this.state.komponenty} onChange={this.handleKomponenty} /></td>
            {/* in case of not overwriting the value, default is SUM of all Komponenty */}
            {/* <td><input type="text" ref="Komponenty" value={this.state.komponenty ? this.state.komponenty : pocet_komponent_v_setu_SUMA} onChange={this.handleKomponenty} /></td> */}
            {/* <td><NumberFormat ref="Komponenty" displayType={'input'} decimalSeparator={","} value={this.state.komponenty.toString()} thousandSeparator={" "} onChange={this.handleKomponenty} /></td> */}
          </tr>
          <tr>
            <td>Cena za set</td>
            <td><input type="text" value={this.state.cena_za_set} onChange={this.handleCenaZaSet} /> Kč</td>
            {/* <td><NumberFormat displayType={'input'} decimalSeparator={","} value={this.state.cena_za_set.toString()} thousandSeparator={" "} onChange={this.handleCenaZaSet} /> Kč</td> */}
          </tr>
          <tr>
            <td>Celková cena za komponenty v setu</td>
            {/* in case of rewriting the value only, use this line */}
            <td><input type="text" value={this.state.celkova_cena} onChange={this.handleCelkovaCena} /> Kč</td>
            {/* in case of not overwriting the value, default is SUM of all Komponenty prices */}
            {/* <td><input type="text" value={ceny_komponent_v_setu_SUMA} /> Kč</td> */}
            {/* <td><NumberFormat displayType={'input'} decimalSeparator={","} value={this.state.celkova_cena.toString()} thousandSeparator={" "} onChange={this.handleCelkovaCena} /> Kč</td> */}
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
    items: state.items || [],
    pocet__pouziti_za_rok: state.pocet_pouziti_za_rok,
    pocet__komponent_v_setu: state.pocet_komponent_v_setu,
    cena__za_set: state.cena_za_set,
    celkova__cena_za_komponenty_v_setu: state.celkova_cena_za_komponenty_v_setu
  };
};

export default connect(mapStateToProps, actions)(Table_2);
