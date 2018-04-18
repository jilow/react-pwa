import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { ip: '...' }
  }

  componentDidMount() {
    axios.get('https://httpbin.org/ip')
      .then(response => {
        this.setState({
          ip: response.data.origin
        })
      })
      .catch(err => {
        this.setState({
          error: 'Error! Could not connect to service'
        })
      })
  }

  render() {
    return (
      <div className="home">
        <h2>Home</h2>
        <p>{ this.state.ip }</p>
        <pre>{ this.state.error }</pre>
      </div>
    );
  }
}

export default Home;