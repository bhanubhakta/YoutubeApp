import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term}
               onChange={event => this.handleOnChange(event)}
               placeholder="  search"
        />
      </div>
    );
  }

  handleOnChange(event) {
    const { onSearch } = this.props;
    this.setState({ term: event.target.value });
    onSearch(event.target.value);
  }
}

export default SearchBar;
