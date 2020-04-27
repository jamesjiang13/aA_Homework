import React from 'react';

import GiphysIndex from './giphys_index';


export class GiphysSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      gifs: []
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const search = this.state.searchTerm;
    this.props.fetchSearchGiphys(search)
      .then(res => this.setState({gifs:res.giphys.data}))
      .then(this.setState({searchTerm: ''}));
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="">Search Field</label>
          <br />
          <input onChange={this.handleChange} ref="searchTerm" value={this.state.searchTerm} type="text"/>
          <button>Search Giphys!</button>
        </form>
        < GiphysIndex gifs={this.state.gifs} />
      </div>
    )
  }
}