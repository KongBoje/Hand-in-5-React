import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicians: this.props.data,
      filterVal: 0
    };
  }

  onFilterChange = (evt) => {
    this.setState({ filterVal: evt.target.value });
  }

  render() {
    let data = this.state.musicians;
    const rows =
      data.filter(star => star.stars >= this.state.filterVal).map((star) =>
        <tr key={star.id}>
          <td>{star.id}</td> <td>{star.name}</td> <td>{star.stars}</td>
        </tr>
      );

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        Search by stars: <input onChange={this.onFilterChange} /><br />
        <table className="table">
          <tr><th>Id</th> <th>Name</th> <th>Stars</th></tr>
          {rows}
        </table>
      </div>
    );
  }
}

export default App;
