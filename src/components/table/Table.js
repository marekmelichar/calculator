import React, {Component} from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Table extends Component {
    constructor(props){
        super(props);

        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(event) {
      // console.log(event.target.id);
      this.props.removeItem(event.target.id);
    }

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
                          return <td key={`.${i}.${j}`}>{item} <span className={j === tableBody[0].length - 1 ? "minus-icon" : ""} id={i} onClick={_this.removeItem}>{j === tableBody[0].length - 1 ? "-" : ""}</span></td>
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

Table.propTypes = {
    widths: React.PropTypes.arrayOf(React.PropTypes.number),
    head: React.PropTypes.arrayOf(React.PropTypes.string),
    body: React.PropTypes.any,
    unit: React.PropTypes.string
}
Table.defaultProps = {
    unit: '%'
}

export default connect(null, actions)(Table);
