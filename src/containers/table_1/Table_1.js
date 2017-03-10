import React, { Component } from 'react';

export default class Table_1 extends Component {
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

  handleSestra(event) {
    this.setState({sestra: event.target.value});
  }

  handleSkladnik(event) {
    this.setState({skladnik: event.target.value});
  }

  handleUcetni(event) {
    this.setState({ucetni: event.target.value});
  }

  render() {
    // console.log(this.state);

    return (
  	  <table className="table-1">
        <thead>
          <tr>
            <th>Osobní náklady</th>
            <th>CZK/měsíc</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sestra COS</td>
            <td><input type="text" value={this.state.sestra} onChange={this.handleSestra} /> Kč</td>
          </tr>
          <tr>
            <td>Pracovník centrálního skladu</td>
            <td><input type="text" value={this.state.skladnik} onChange={this.handleSkladnik} /> Kč</td>
          </tr>
          <tr>
            <td>Ekonomické oddělení - účetní</td>
            <td><input type="text" value={this.state.ucetni} onChange={this.handleUcetni} /> Kč</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
