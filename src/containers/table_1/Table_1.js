import React, { Component } from 'react';
import _ from 'lodash';

// import NumberFormat from 'react-number-format';

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
  //   var el = document.getElementById('plat-sestry');
  //   el.addEventListener('keyup', function () {
  //       this.value = space(this.value, 3);
  //   });
  //
  //   function space(str, after) {
  //     if (!str) {
  //         return false;
  //     }
  //     after = after || 3;
  //     var v = str.replace(/[^\dA-Z]/g, ''),
  //         reg = new RegExp(".{" + after + "}", "g");
  //     return v.replace(reg, function (a) {
  //         return a + ' ';
  //     });
  //   }
  // }



  handleSestra(event) {
    // let value = event.target.value.toString().replace(/[^\dA-Z]/g, '').replace(/(.{3})/g, '$1 ').trim()
    // let value = event.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    // let value = event.target.value.toString().replace(/\B(?=(\d{3})+(?!\.|$))/g, " ");
    // let value = event.target.value.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );


    // if (event.target.value.length - 1 >= 6) {
    //    value = event.target.value.replace(/(.{3})/g, '$1 ').trim()
    // } else {
    //   value = event.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",")
    // }

    // console.log(value);

    let value = event.target.value;

    this.setState({ sestra: value })
    this.props.algo_plat_sestry(value.replace(/\s+/g, '')); // delete spaces in the number
  }

  handleSkladnik(event) {
    let value = event.target.value

    this.setState({skladnik: value});
    this.props.algo_plat_skladnika(value.replace(/\s+/g, '')); // delete spaces in the number
  }

  handleUcetni(event) {
    let value = event.target.value

    this.setState({ucetni: value});
  }

  render() {
    // console.log(this.state.sestra);
    // console.log(_.debounce);

    // let plat_sestry_pred = this.state.sestra.toString()
    // let plat_sestry = plat_sestry_pred.replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",")
    // let sestra = this.state.sestra;
    // let plat_sestry = sestra.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",")

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
            <td><input type="text" value={this.state.sestra.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} onChange={this.handleSestra} /> Kč</td>
            {/* <td><NumberFormat value={this.state.sestra.toString()} thousandSeparator={" "} onChange={this.handleSestra} /> Kč</td> */}

          </tr>
          <tr>
            <td>Pracovník centrálního skladu</td>
            <td><input type="text" value={this.state.skladnik.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} onChange={this.handleSkladnik} /> Kč</td>
            {/* <td><NumberFormat value={this.state.skladnik.toString()} thousandSeparator={" "} onChange={this.handleSkladnik} /> Kč</td> */}
          </tr>
          <tr>
            <td>Ekonomické oddělení - účetní</td>
            <td><input type="text" value={this.state.ucetni.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} onChange={this.handleUcetni} /> Kč</td>
            {/* <td><NumberFormat value={this.state.ucetni.toString()} thousandSeparator={" "} onChange={this.handleUcetni} /> Kč</td> */}
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
