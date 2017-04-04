import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

import Table_1 from './table_1/Table_1';
import Table_2 from './table_2/Table_2';
import Table_3 from './table_3/Table_3';
import Table_4 from './table_4/Table_4';
import Table_Results from './table_results/Table_Results';

class App extends Component {
  render() {
    return (
      <div>
        <header className="row">
          <div className="nadpis">NADPIS <strong>KALKULAČKA</strong> SEMI CPT</div>
          {/* <div className="logo"></div> */}
          <div className="logo">
            <img src="/images/logo.png" />
          </div>
        </header>
        <section className="row">
          <div className="vstupni_udaje wrap column">
            <h1>VSTUPNÍ ÚDAJE</h1>
            <h2>VSTUPNÍ ÚDAJE</h2>
            <Table_1 />
            <Table_2 />
            <Table_3 />
          </div>
            <Table_Results />
        </section>
        <section className="row margin-top-2">
          <div className="komponenty wrap column">
            <h1>KOMPONENTY</h1>
            <Table_4 />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  return {

  };
};

export default connect(mapStateToProps, actions)(App);
