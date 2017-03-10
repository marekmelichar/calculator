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
        <Table_1 />
        <Table_2 />
        <Table_3 />
        <Table_4 />
        <Table_Results />
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
