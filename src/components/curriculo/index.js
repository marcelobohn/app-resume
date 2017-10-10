import React, { Component } from 'react';

import DadosPessoais from './DadosPessoais';

class Curriculo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: ''
    };
    this.getData();
  }

  getData(domain) {
    fetch('https://gist.githubusercontent.com/marcelobohn/c6d9c18fad95b3903214ada73d4ffd46/raw/f055b6f8a15c621e268c21f4e7e0531380e6f6a4/resume')
      .then(response => response.json())
      .then(json => this.setState({person: json.person}))
  }

  render() {
    return (
      <div className="container">
        <DadosPessoais data={ this.state.person }/>
      </div>
    );
  }
}

export default Curriculo;
