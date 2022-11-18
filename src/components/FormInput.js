import React, { Component } from 'react';
import { nanoid } from 'nanoid';
export default class FormInput extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };
  handleInputChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value });
  };
  handleInputnumberChange = event => {
    this.setState({ number: event.currentTarget.value });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            value={this.state.number}
            onChange={this.handleInputnumberChange}
          />

          <button>Add contact</button>
        </form>
      </div>
    );
  }
}
