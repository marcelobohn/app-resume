import React, { Component } from 'react';

import Person from './Person';
import Contact from './Contact';
import Social from './Social';

class Curriculo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: '',
      resume: '',
      contacts: '',
      social: ''
    };
    this.getData();
  }

  getData(domain) {
    fetch('https://gist.githubusercontent.com/marcelobohn/c6d9c18fad95b3903214ada73d4ffd46/raw/f055b6f8a15c621e268c21f4e7e0531380e6f6a4/resume')
      .then(response => response.json())
      .then(json => this.setState({
        person: json.person, 
        resume: json.resume,
        contacts: json.contacts,
        social: json.social
      }))
  }

  render() {
    return (
      <div className="container">
        <Person person={ this.state.person } resume={ this.state.resume }/>
        <Contact contacts={ this.state.contacts }/>
        <Social social={ this.state.social }/>
      </div>
    );
  }
}

export default Curriculo;
