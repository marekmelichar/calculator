import React, { Component } from 'react';

// import NumberFormat from 'react-number-format';

import { connect } from 'react-redux';

import * as actions from '../../actions';

import Table from '../../components/table/Table';

class Table_4 extends Component {
  constructor() {
    super();
    this.state = {
      komponenta: '',
      pocet_ks: '',
      cena_ks: '',
      cena_celkem: ''
    };

    this.handleKomponenta = this.handleKomponenta.bind(this);
    this.handlePocetKs = this.handlePocetKs.bind(this);
    this.handleCenaKs = this.handleCenaKs.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleKomponenta(event) {
    this.setState({komponenta: event.target.value});
  }

  handlePocetKs(event) {
    let value = event.target.value

    this.setState({
      pocet_ks: value,
      cena_celkem: value * this.state.cena_ks
    });
  }

  handleCenaKs(event) {
    let value = event.target.value

    this.setState({
      cena_ks: value,
      cena_celkem: parseFloat(this.state.pocet_ks * value).toFixed(2)
    });
  }

  // handleCenaCelkem(event) {
  //   this.setState({cena_celkem: event.target.value});
  // }

  addItem(event) {
    event.preventDefault()

    let komponenta = this.state.komponenta;
    let pocet_ks = this.state.pocet_ks;
    let cena_ks = this.state.cena_ks;
    let cena_celkem = this.state.cena_celkem;

    this.setState({
      komponenta: '',
      pocet_ks: '',
      cena_ks: '',
      cena_celkem: ''
    })

    this.props.addItem(komponenta, pocet_ks, cena_ks, cena_celkem);

    // focus na komponenta-jmeno
    $('.komponenta-jmeno').focus()
  }

  render() {
    let body = []
    let suma_ks = []
    let suma_celkova_cena = []
    let items = this.props.items
    // items = items.filter( Boolean );

    // console.log(items);

    items.forEach(function(item) {
      if(typeof item !== 'undefined') {
        // console.log('inside items forEach', item);
        body.push([ item.komponenta, item.pocet_ks.toString().replace(".", ",") + ' ks', item.cena_ks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",") + ' Kč', item.cena_celkem.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",") + ' Kč', "" ])
        suma_ks.push(parseFloat(item.pocet_ks))
        suma_celkova_cena.push(parseFloat(item.cena_celkem))
      }
    })

    // console.log(suma_ks, suma_celkova_cena);
    var sum_suma_ks = suma_ks.reduce((a, b) => a + b, 0);
    var sum_suma_celkova_cena = suma_celkova_cena.reduce((a, b) => a + b, 0);

    // every time it renders, send out SUM, and decision is 1
    this.props.celkova_cena_za_komponenty_v_setu(sum_suma_celkova_cena ? sum_suma_celkova_cena : 0, 1);

    return (
      <div>
        <h2>CPT set - jednotlivé komponenty</h2>
    	  <table className="table-4">
          <thead>
            <tr>
              <th className="text-left" style={{width: 28.5 + '%'}}></th>
              <th style={{width: 17 + '%'}}></th>
              <th style={{width: 22 + '%'}}></th>
              <th style={{width: 22 + '%'}}></th>
              <th style={{width: 10.5 + '%'}}></th>
            </tr>
            <tr>
              <th>Komponenta</th>
              <th>Počet ks</th>
              <th>Cena ks</th>
              <th>Cena celkem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><form onSubmit={this.addItem}><input className="komponenta-jmeno" type="text" value={this.state.komponenta} onChange={this.handleKomponenta} /></form></td>
              <td><form onSubmit={this.addItem}><input type="text" value={this.state.pocet_ks} onChange={this.handlePocetKs} /></form></td>
              <td><form onSubmit={this.addItem}><input type="text" value={this.state.cena_ks} onChange={this.handleCenaKs} /> Kč</form></td>
              <td className="komponenty-celkova-cena-wrapper">
                <div className="komponenty-celkova-cena">
                  {this.state.cena_celkem || 0} Kč
                </div>
              </td>
              <td><span className="plus-icon" onClick={this.addItem}>+</span></td>
            </tr>
          </tbody>
        </table>
        <Table classNamee={"products-main-table"} widths={[30,20,20,20,10]} head={[]} body={body}  />
        <table className="komponenty-vysledky-celkem">
          <thead>
            <tr>
              <th className="text-left" style={{width: 28.5 + '%'}}></th>
              <th style={{width: 17 + '%'}}></th>
              <th style={{width: 22 + '%'}}></th>
              <th style={{width: 22 + '%'}}></th>
              <th style={{width: 10.5 + '%'}}></th>
            </tr>
            <tr>
              <th>Celkem počet ks</th>
              <th>{sum_suma_ks + ' ks'}</th>
              <th>Celková cena</th>
              <th>{sum_suma_celkova_cena.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",") + ' Kč'}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        {/* <a href="#" onClick={this.saveFile}>Save As</a> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.items);
  // whatever is returned here, gets in as a prop
  return {
    items: state.items || []
    // save: state.save
  };
};

export default connect(mapStateToProps, actions)(Table_4);






































// import React, { Component } from 'react';
//
// import { connect } from 'react-redux';
//
// import * as actions from '../../actions';
//
// import Table from '../../components/table/Table';
//
// class Table_3 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       komponenta: '',
//       pocet_ks: '',
//       cena_ks: '',
//       cena_celkem: ''
//     };
//
//     this.handleKomponenta = this.handleKomponenta.bind(this);
//     this.handlePocetKs = this.handlePocetKs.bind(this);
//     this.handleCenaKs = this.handleCenaKs.bind(this);
//     this.handleCenaCelkem = this.handleCenaCelkem.bind(this);
//     this.addItem = this.addItem.bind(this);
//   }
//
//   handleKomponenta(event) {
//     this.setState({komponenta: event.target.value});
//   }
//
//   handlePocetKs(event) {
//     this.setState({
//       pocet_ks: event.target.value,
//       cena_celkem: event.target.value * this.state.cena_ks
//     });
//   }
//
//   handleCenaKs(event) {
//     this.setState({
//       cena_ks: event.target.value,
//       cena_celkem: this.state.pocet_ks * event.target.value
//     });
//   }
//
//   handleCenaCelkem(event) {
//     this.setState({cena_celkem: event.target.value});
//   }
//
//   addItem() {
//     let komponenta = this.state.komponenta;
//     let pocet_ks = this.state.pocet_ks;
//     let cena_ks = this.state.cena_ks;
//     let cena_celkem = this.state.cena_celkem;
//
//     this.props.addItem(komponenta, pocet_ks, cena_ks, cena_celkem);
//
//     this.setState({
//       komponenta: '',
//       pocet_ks: '',
//       cena_ks: '',
//       cena_celkem: ''
//     })
//   }
//
//   render() {
//     let items = this.props.items;
//     console.log('items', items);
//
//
//
//     // <tr>
//     // //   <td>{row.komponenta}</td>
//     // //   <td>{row.pocet_ks}</td>
//     // //   <td>{row.cena_ks}</td>
//     // //   <td>{row.cena_celkem}</td>
//     // // </tr>
//
//     return (
//   	  <table>
//         <thead>
//           <tr>
//             <th>CPT set - jednotlivé komponenty</th>
//           </tr>
//           <tr>
//             <th>Komponenta</th>
//             <th>Počet ks</th>
//             <th>Cena ks</th>
//             <th>Cena celkem</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td><input type="text" value={this.state.komponenta} onChange={this.handleKomponenta} /></td>
//             <td><input type="text" value={this.state.pocet_ks} onChange={this.handlePocetKs} /></td>
//             <td><input type="text" value={this.state.cena_ks} onChange={this.handleCenaKs} /> Kč</td>
//             <td><input type="text" value={this.state.cena_celkem} onChange={this.handleCenaCelkem} /> Kč <span onClick={this.addItem}>Přidat</span></td>
//           </tr>
//           {/* {aaa} */}
//         </tbody>
//
//         <Table />
//       </table>
//     );
//   }
// }
//
// const mapStateToProps = state => {
//   // console.log(state.items);
//   // whatever is returned here, gets in as a prop
//   return {
//     items: state.items || []
//   };
// };
//
// export default connect(mapStateToProps, actions)(Table_3);
