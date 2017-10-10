import React, { Component } from 'react';

import Person from './Person';
import Contact from './Contact';
import Social from './Social';
import Education from './Education';
import Languages from './Languages';
import Skils from './Skils';
import Experiences from './Experiences';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

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
  }

  cleanData() {
    this.setState({
      person: '', 
      resume: '',
      contacts: '',
      social: '',
      entities: '',
      languages: '',
      skils: '',
      experiences: ''
    })
  }

  getData(domain) {    
    fetch(domain)
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

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.cleanData();
      this.getData(event.target.value);
    }
  }  

  render() {
    return (
      <div className="container">
        <FormGroup>
          <ControlLabel>URL do currículo JSON</ControlLabel>
          <FormControl
            type="text"
            defaultValue={'https://gist.githubusercontent.com/marcelobohn/c6d9c18fad95b3903214ada73d4ffd46/raw'}
            placeholder="digite o endereço"
            onKeyPress={this.handleKeyPress}/>
          </FormGroup>
          {this.state.person && <div>
            <Person person={ this.state.person } resume={ this.state.resume }/>
            <Contact contacts={ this.state.contacts }/>
            <Social items={ this.state.social }/>
            <Education entities={ this.state.entities }/>
            <Languages items={ this.state.languages }/>
            <Skils items={ this.state.skils }/>
            <Experiences items={ this.state.experiences }/>
            </div>}
      </div>
    );
  }
}

export default Curriculo;
