import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

export default class SearchIndex extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      results: [],
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    }
    this.inputChange = this.inputChange.bind(this);
  }

  componentDidMount() {
    this.setState({ results: this.state.things })
  }

  searchFunction = () => {
    if (this.state.things.includes(this.state.searchTerm.toLowerCase()))
      this.setState({ results: [this.state.searchTerm.toLowerCase()] })
    else if (this.state.searchTerm !== '')
      this.setState({ results: ['no results'] })
    else
      this.setState({ results: this.state.things })
  }

  inputChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <div>
        <Input
          style={{ width: '300px', display: 'inline-block' }}
          placeholder='Search Here'
          value={this.state.searchTerm}
          onChange={this.inputChange}
        />
        <Button
          style={{ display: 'inline-block' }}
          onClick={this.searchFunction}>
          search
        </Button>
        <h3>Results:</h3>
        <ul>{this.state.results.map(thing => <li>{thing}</li>)}</ul>
      </div>
    )
  }
}
