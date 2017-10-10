import React, { Component } from 'react';

import Person from './Person';
import Contact from './Contact';
import Social from './Social';
import Education from './Education';
import Languages from './Languages';
import Skils from './Skils';
import Experiences from './Experiences';

class Curriculo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: '',
      resume: '',
      contacts: '',
      social: '',
      entities: '',
      languages: '',
      skils: '',
      experiences: ''
    };
    this.getData();
  }

  getData(domain) {
    fetch('https://gist.githubusercontent.com/marcelobohn/c6d9c18fad95b3903214ada73d4ffd46/raw')
      .then(response => response.json())
      .then(json => this.setState({
        person: json.person, 
        resume: json.resume,
        contacts: json.contacts,
        social: json.social,
        entities: json.education,
        languages: json.languages,
        skils: json.skils,
        experiences: json.experiences
      }))
  }

  render() {
    return (
      <div className="container">
        <Person person={ this.state.person } resume={ this.state.resume }/>
        <Contact contacts={ this.state.contacts }/>
        <Social items={ this.state.social }/>
        <Education entities={ this.state.entities }/>
        <Languages items={ this.state.languages }/>
        <Skils items={ this.state.skils }/>
        <Experiences items={ this.state.experiences }/>
      </div>
    );
  }
}

export default Curriculo;
