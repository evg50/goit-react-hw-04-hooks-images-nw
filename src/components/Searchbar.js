import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    searchText: '',
  };
  changeSearch = e => {
    this.setState({ searchText: e.currentTarget.value });
  };
  formSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    if (this.state.searchText.trim() === '') {
      toast.error('введитие имя покемона');
      return;
    }
    this.props.onSubmit(this.state);

    this.setState({ searchText: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.formSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            value={this.state.searchText}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeSearch}
          />
        </form>
      </header>
    );
  }
}
