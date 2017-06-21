import React, { Component } from 'react';
// import FileSaver from 'file-saver';

import { connect } from 'react-redux';

import * as actions from '../actions';

import NazevSetu from './nazev_setu/NazevSetu';
import Table_1 from './table_1/Table_1';
import Table_2 from './table_2/Table_2';
import Table_3 from './table_3/Table_3';
import Table_4 from './table_4/Table_4';
import Table_Results from './table_results/Table_Results';

// import state from '../index';

class App extends Component {

  // componentWillReceiveProps(nextProps){
  //   console.log('nextProps', nextProps.globalState);
  //   // this.setState({
  //   //   nazev_setu: nextProps.nazev_setu
  //   // })
  // }

  constructor(props) {
    super(props)

    this.state = {
      // nazev_setu: 'NÁZEV SETU'
      // state: this.props
    }

    // this.onChange = this.onChange.bind(this)
    // this.saveFile = this.saveFile.bind(this)
  }

  // onChange(event) {
  //   this.setState({
  //     nazev_setu: event.target.value
  //   })
  //
  //   this.props.nazevSetu(this.state.nazev_setu)
  // }

  input(e) {
    let data;
    let file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file);

    let _this = this;

    reader.onload = function(event) {
        if (!event) {
          data = JSON.parse(reader.content);
        }
        else {
          data = JSON.parse(event.target.result);
        }
        // console.log('daaaaaata', data);

        _this.props.algo_plat_sestry(data.logic.mesicne_sestra)
        _this.props.algo_plat_skladnika(data.logic.mesicne_skladnik)
        _this.props.algo_plat_ucetni(data.logic.mesicne_ucetni)
        _this.props.pocet_pouziti_za_rok(data.pocet_pouziti_za_rok.pocet)
        _this.props.pocet_komponent_v_setu_SUMA(data.pocet_komponent_v_setu.suma)
        _this.props.cena_za_set(data.cena_za_set.cena)
        _this.props.celkova_cena_za_komponenty_v_setu(data.celkova_cena_za_komponenty_v_setu.cena, 1)
        _this.props.vykony_na_oddeleni_za_rok(data.logic.vykon_oddeleni_za_rok_input)
        _this.props.pomer_vyuziti(data.logic.pomer_vyuziti_input)
        _this.props.nazevSetu(data.nazev_setu.nazev)

        data.items.forEach(function(item) {
          return _this.props.addItem(item.komponenta, item.pocet_ks, item.cena_ks, item.cena_celkem)
        })
      }
    // let json = JSON.parse(files[0])
  }

  saveTheJSON(event) {
    event.preventDefault()

    // var data = this.props.globalState;
    // var json = JSON.stringify(data);
    // var blob = new Blob([json], {type: "application/json"});
    // var url  = window.navigator.msSaveOrOpenBlob ? window.navigator.msSaveOrOpenBlob : URL.createObjectURL(blob);
    //
    // var a = document.createElement('a');
    // a.download    = "backup.json";
    // a.href        = url;
    // a.className   = "button-save-as";
    // a.textContent = "Uložit jako";
    //
    // document.getElementById('saveFeature').appendChild(a);




    // let fileName = "backup.json"
    // window.saveAs(blob, fileName);





    if(window.navigator.msSaveOrOpenBlob) {
      console.log('inside IE11');

      var data = this.props.globalState;
      var json = JSON.stringify(data);
      var blob = new Blob([json], {type: "application/json"});

      // var blob = new Blob(json);
      var url = window.navigator.msSaveOrOpenBlob(blob)

      var a = this.refs.saveButton
      a.download    = "backup.json";
      a.href        = url;
      // a.className   = "button-save-as";
      // a.textContent = "Uložit jako";

      document.getElementById('saveFeature').appendChild(a);

    } else {
      console.log('all the other browsers');
      var data = this.props.globalState;
      var json = JSON.stringify(data);
      var blob = new Blob([json], {type: "application/json"});
      var url  = URL.createObjectURL(blob);

      var a = document.createElement('a');
      a.download    = "backup.json";
      a.href        = url;
      a.className   = "button-save-as";
      a.textContent = "Uložit jako";

      document.getElementById('saveFeature').appendChild(a);
    }
  }

  render() {
    // console.log(this.props.nazev_setu);
    return (
      <div>
        <header className="row">
          <div className="row">
            <div className="column size_100">
              <div className="nadpis"><strong>KALKULAČKA</strong> CombiSet</div>
              {/* <button onClick={() => this.props.saveTheState()}>SAVE</button> */}
              <div className="logo">
                <img src="/images/logo.png" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column size_100">
              <div className="nazev-setu">
                <NazevSetu />
                {/* <form onSubmit={this.onSubmit}>
                  <input type="text" onChange={this.onChange} value={this.state.nazev_setu} />
                </form> */}
              </div>
            </div>
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
          <div className="hidden-logo-for-print">
            <img src="/images/logo.png" />
          </div>
          <div className="komponenty wrap column">
            <h1>KOMPONENTY</h1>
            <Table_4 />
          </div>
        </section>
        <section id="save-feature" className="row margin-top-2">
          <div id="saveFeature" className="save-as wrap column">
            <h1>Stav aplikace</h1>
            <span>Načíst stav :</span>
            <input type="file" onChange={this.input.bind(this)} />
            <a href="" ref="saveButton" className="margin-left-2" onClick={this.saveTheJSON.bind(this)}>Uložení stavu aplikace</a>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  // console.log(state);
  return {
    globalState: state
    // nazev_setu: state.nazev_setu.nazev

    // items: state.items
    // celkova_cena_za_komponenty_v_setu: state.celkova_cena_za_komponenty_v_setu,
    // cena_za_set: state.cena_za_set,
    // logic: state.logic,
    // pocet_komponent_v_setu: state.pocet_komponent_v_setu,
    // pocet_pouziti_za_rok: state.pocet_pouziti_za_rok
  };
};

export default connect(mapStateToProps, actions)(App);
