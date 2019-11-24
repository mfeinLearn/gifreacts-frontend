import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
    // console.log(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
          <label>Gif Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          /> {/*call at some point in time in the future*/}
          <input type="submit" value="Search" />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
