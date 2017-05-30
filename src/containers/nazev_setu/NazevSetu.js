import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class NazevSetu extends Component {
  componentWillReceiveProps(nextProps){
    // console.log('nextProps', nextProps.globalState);
    this.setState({
      nazev_setu: nextProps.nazev_setu
    })
  }

  constructor(props) {
    super(props)

    this.state = {
      nazev_setu: 'NÁZEV SETU'
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.setState({
      nazev_setu: event.target.value
    })

    this.props.nazevSetu(event.target.value)
  }

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} value={this.state.nazev_setu} />
      </form>
    )
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  // console.log(state);
  return {
    nazev_setu: state.nazev_setu.nazev
  };
};

export default connect(mapStateToProps, actions)(NazevSetu);
