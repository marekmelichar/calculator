import React, {Component} from 'react';
import Modal from '../../containers/modal/Modal';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Table extends Component {
    constructor(props){
        super(props);

        this.state = {
          id: ''
        }

        this.removeItem = this.removeItem.bind(this);
        // this.editItem = this.editItem.bind(this);
        this.initModal = this.initModal.bind(this);
        // this.closeModal = this.closeModal.bind(this);
        // this.onChange = this.onChange.bind(this);
    }

    // onChange(event) {
    //   let value = event.target.value
    //
    //   console.log(value);
    //
    //   this.setState({
    //     value
    //   })
    // }

    removeItem(event) {
      // console.log(event.target.id);
      this.props.removeItem(event.target.id);
    }

    // editItem(event) {
    //   // console.log(this.state.id);
    //
    // }

    initModal(event) {
      let id = event.target.id
      // console.log('in open modal', id);
      let modal = document.querySelector(`.modal_${id}`)
      modal.classList.add('activated')

      // this.modal =
    }

    // closeModal(event) {
    //   let id = event.target.id;
    //
    //   this.setState({ id })
    //
    //   let modal = document.getElementById('modal')
    //   modal.classList.remove('activated')
    // }

    render() {
      let tableBody = this.props.body;
      let status_color = this.props.status_color;

        let colgroup = this.props.widths.map(function(item, i){
            // return <col key={`.${i}.${item}`} style={{width: `${item}${this.props.unit}`}} />
            // if(i === 0 ){
            //   return <col key={`.${i}.${item}`} className="expondable-firstCol" style={{width: `${item}${this.props.unit}`}} />;
            // }
            return <col key={`.${i}.${item}`} style={{width: `${item}${this.props.unit}`}} />;
        }, this)
        let thead = (<tr>{this.props.head.map(function(item, i){
            return <th key={`.${i}.${item}`}>{item}</th>
        })}</tr>);

        let _this = this;

        let tbody = tableBody.map(function(line, i){
                    return (
                      <tr key={`.${i}`}>
                        {line.map(function(item, j){
                          // if it is last item then use a className of status_color
                          return <td key={`.${i}.${j}`}>
                                    {item}
                                    <span className="edit-row" id={i} onClick={_this.initModal}>{j === tableBody[0].length - 1 ? "UPRAVIT" : ""}</span>{j === tableBody[0].length - 1 ? <Modal id={i} line={{line, i}} /> : ""}
                                    <span className={j === tableBody[0].length - 1 ? "minus-icon" : ""} id={i} onClick={_this.removeItem}>{j === tableBody[0].length - 1 ? "-" : ""}</span>
                                  </td>
                        })}
                      </tr>);
                });


        return (
            <table className={this.props.classNamee}>
                <colgroup>{colgroup}</colgroup>
                <thead>{thead}</thead>
                <tbody>{tbody}</tbody>
            </table>
        );
    }
}


Table.defaultProps = {
    unit: '%'
}

export default connect(null, actions)(Table);
