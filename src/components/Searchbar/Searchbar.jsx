import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    queryValue: '',
  };
  handleChange = ({ target }) => {
    this.setState({ queryValue: target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.queryValue);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.queryValue}
          />
        </form>
      </header>
    );
  }
}
