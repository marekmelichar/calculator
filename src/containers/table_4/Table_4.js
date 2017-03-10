import React, { Component } from 'react';

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
    this.handleCenaCelkem = this.handleCenaCelkem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleKomponenta(event) {
    this.setState({komponenta: event.target.value});
  }

  handlePocetKs(event) {
    this.setState({
      pocet_ks: event.target.value,
      cena_celkem: event.target.value * this.state.cena_ks
    });
  }

  handleCenaKs(event) {
    this.setState({
      cena_ks: event.target.value,
      cena_celkem: this.state.pocet_ks * event.target.value
    });
  }

  handleCenaCelkem(event) {
    this.setState({cena_celkem: event.target.value});
  }

  addItem() {
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
  }

  render() {
    // console.log('items', items);

    let body = [];
    let komponenta,
        pocet_ks,
        cena_ks,
        cena_celkem;

    if (this.props.items) {
      let items = this.props.items;

      items.forEach(function(item) {
        // console.log(item.komponenta, item.pocet_ks, item.cena_ks, item.cena_celkem);
        body.push([ item.komponenta, item.pocet_ks, item.cena_ks, item.cena_celkem ])
      })
    }

    return (
      <div>
    	  <table className="table-4">
          <thead>
            <tr>
              <th>CPT set - jednotlivé komponenty</th>
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
              <td><input type="text" value={this.state.komponenta} onChange={this.handleKomponenta} /></td>
              <td><input type="text" value={this.state.pocet_ks} onChange={this.handlePocetKs} /></td>
              <td><input type="text" value={this.state.cena_ks} onChange={this.handleCenaKs} /> Kč</td>
              <td><input type="text" value={this.state.cena_celkem} onChange={this.handleCenaCelkem} /> Kč <span onClick={this.addItem}>Přidat</span></td>
            </tr>
          </tbody>
        </table>
        <Table widths={[25,25,25,25]} head={[]} body={body}  />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.items);
  // whatever is returned here, gets in as a prop
  return {
    items: state.items || []
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
