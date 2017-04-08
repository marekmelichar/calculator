import React, { Component } from 'react';

import NumberFormat from 'react-number-format';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Table_1 extends Component {
  constructor() {
    super();
    this.state = {
      sestra: 34000,
      skladnik: 25000,
      ucetni: 30000
    };

    this.handleSestra = this.handleSestra.bind(this);
    this.handleSkladnik = this.handleSkladnik.bind(this);
    this.handleUcetni = this.handleUcetni.bind(this);
  }

  // componentDidMount() {
  //   this.props.algo_plat_sestry(this.state.sestra);
  //   this.props.algo_plat_skladnika(this.state.skladnik);
  // }

  handleSestra(event) {
    this.setState({sestra: event.target.value});
    this.props.algo_plat_sestry(event.target.value);
  }

  handleSkladnik(event) {
    this.setState({skladnik: event.target.value});
    this.props.algo_plat_skladnika(event.target.value);
  }

  handleUcetni(event) {
    this.setState({ucetni: event.target.value});
  }

  render() {
    // console.log(this.state.sestra);

    // let plat_sestry_pred = this.state.sestra.toString()
    // let plat_sestry = plat_sestry_pred.replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",")

    return (
  	  <table className="table-1">
        {/* <colgroup>
          <col style={{width: 30 + '%'}}></col>
          <col style={{width: 50 + '%'}}></col>
        </colgroup> */}
        <thead>
          <tr>
            <th className="text-left" style={{width: 70 + '%'}}>Osobní náklady</th>
            <th className="text-right" style={{width: 30 + '%'}}>CZK/měsíc</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sestra COS</td>
            {/* <td>{plat_sestry}</td> .toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",") */}
            {/* <td><input type="text" value={this.state.sestra} onChange={this.handleSestra} /> Kč</td> */}
            <td><NumberFormat value={this.state.sestra.toString()} thousandSeparator={" "} /> Kč</td>

          </tr>
          <tr>
            <td>Pracovník centrálního skladu</td>
            {/* <td><input type="text" value={this.state.skladnik} onChange={this.handleSkladnik} /> Kč</td> */}
            <td><NumberFormat value={this.state.skladnik.toString()} thousandSeparator={" "} /> Kč</td>
          </tr>
          <tr>
            <td>Ekonomické oddělení - účetní</td>
            {/* <td><input type="text" value={this.state.ucetni} onChange={this.handleUcetni} /> Kč</td> */}
            <td><NumberFormat value={this.state.ucetni.toString()} thousandSeparator={" "} /> Kč</td>
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

  };
};

export default connect(mapStateToProps, actions)(Table_1);
