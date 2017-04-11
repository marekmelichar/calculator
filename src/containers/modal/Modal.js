import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Modal extends Component {
  componentWillMount() {
    let arr = []
    this.props.line.line.map(function(item) {
      arr.push(item)
    })

    this.setState({
      value1: arr[0],
      value2: arr[1],
      value3: arr[2],
      value4: arr[3],
      id: this.props.id
    })
  }

  constructor(props) {
    super(props)

    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      id: ''
      // visible: false
    }

    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.onChange3 = this.onChange3.bind(this);
    this.onChange4 = this.onChange4.bind(this);
    this.closeModal = this.closeModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange1(event) {
    this.setState({ value1: event.target.value })
  }

  onChange2(event) {
    this.setState({ value2: event.target.value })
  }

  onChange3(event) {
    this.setState({ value3: event.target.value })
  }

  onChange4(event) {
    this.setState({ value4: event.target.value })
  }

  closeModal() {
    var modal = document.querySelector(`.modal_${this.props.id}`);
    // console.log(modal);
    modal.classList.remove('activated');
    // this.setState({ visible: false })
  }

  onSubmit() {
    let id = this.state.id;
    let value1 = this.state.value1;
    let value2 = this.state.value2;
    let value3 = this.state.value3;
    let value4 = this.state.value4;

    // console.log(id, value1, value2, value3, value4);

    this.props.edit_item(id, value1, value2, value3, value4)

    return this.closeModal();
  }

  render() {
    // console.log('modal window', this.state);

    return(
      <div id="modal" className={this.state.visible ? `modal_${this.props.id} activated` : `modal_${this.props.id}`}>
        <div className={"modalContent"}>
          <a className="closeModal" onClick={this.closeModal}>X</a>
          {/* {this.props.children} */}
          <input type="tel" value={this.state.value1} onChange={this.onChange1} />
          <input type="tel" value={this.state.value2} onChange={this.onChange2} />
          <input type="tel" value={this.state.value3} onChange={this.onChange3} />
          <input type="tel" value={this.state.value4} onChange={this.onChange4} />
          <button onClick={this.onSubmit}>OK</button>
          <button onClick={this.closeModal}>ZRUŠIT</button>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(Modal);
