import React, { Component } from 'react';

// import NumberFormat from 'react-number-format';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Table_3 extends Component {
  componentWillReceiveProps(nextProps) {
    this.setState({
      vykony_na_oddeleni_za_rok: nextProps.vykony__na_oddeleni_za_rok,
      pomer_pouziti: nextProps.pomer__pouziti
    })
  }

  constructor() {
    super();
    this.state = {
      vykony_na_oddeleni_za_rok: 1500,
      pomer_pouziti: 0
    };

    this.handle_vykony_na_oddeleni_za_rok = this.handle_vykony_na_oddeleni_za_rok.bind(this);
    this.handle_pomer_pouziti = this.handle_pomer_pouziti.bind(this);
  }

  componentDidMount() {
    this.props.vykony_na_oddeleni_za_rok(this.state.vykony_na_oddeleni_za_rok);
    // this.props.pomer_vyuziti(this.state.pomer_pouziti);
  }

  handle_vykony_na_oddeleni_za_rok(event) {
    this.setState({vykony_na_oddeleni_za_rok: event.target.value});
    return this.props.vykony_na_oddeleni_za_rok(event.target.value);
  }

  handle_pomer_pouziti(event) {
    this.setState({pomer_pouziti: event.target.value});
    return this.props.pomer_vyuziti(event.target.value);
  }

  // handleSkladnik(event) {
  //   this.setState({skladnik: event.target.value});
  // }

  render() {
    // console.log(this.state);

    return (
  	  <table className="table-3 soucasne-pouzivani-CPT-setu">
        <thead>
          <tr>
            <th className="text-left" style={{width: 70 + '%'}}>Současné používání CPT setů na oddělení</th>
            <th className="text-right" style={{width: 30 + '%'}}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Celkový počet výkonů na oddělení za rok
              {this.state.vykony_na_oddeleni_za_rok === 0 &&
                <p style={{color: 'red'}}>Při vložení nulové hodnoty nelze výpočet provést.</p>}
            </td>
            <td>
              <input type="text" value={this.state.vykony_na_oddeleni_za_rok} onChange={this.handle_vykony_na_oddeleni_za_rok} />
            </td>
            {/* <td><NumberFormat displayType={'input'} decimalSeparator={","} value={this.state.vykony_na_oddeleni_za_rok.toString()} thousandSeparator={" "} onChange={this.handle_vykony_na_oddeleni_za_rok} /></td> */}
          </tr>
          <tr>
            <td>Poměr použití CPT ke všem výkonům (%)</td>
            <td><input type="text" value={this.state.pomer_pouziti} onChange={this.handle_pomer_pouziti} /> %</td>
            {/* <td><NumberFormat displayType={'input'} decimalSeparator={","} value={this.state.pomer_pouziti.toString()} thousandSeparator={" "} onChange={this.handle_pomer_pouziti} /> %</td> */}
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
    vykony__na_oddeleni_za_rok: state.logic.vykon_oddeleni_za_rok_input || 0,
    pomer__pouziti: state.logic.pomer_vyuziti_input || 0
  };
};

export default connect(mapStateToProps, actions)(Table_3);
