import React, { Component } from 'react';

import Person from './Person';
import Contact from './Contact';
import Social from './Social';
import Education from './Education';
import Languages from './Languages';
import Skils from './Skils';
import Experiences from './Experiences';

import SchemaInvalid from './SchemaInvalid';
import Error from './Error';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const schemaResume = require('../../schema');

class Curriculo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: '',
      schemaIsValid: false,
      error: ''
    };
  }

  cleanData() {
    this.setState({
      resume: '',
      schemaIsValid: false,
      error: ''
    })
  }

  async getData(domain) {
    return await fetch(domain)
      .then(response => {return response.json()})
      .then(json => this.setState({
        resume: json
      }))
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        this.setState({
          error: error.message
        });
      });
  }

  handleKeyPress = async (event) => {
    if(event.key === 'Enter'){
      this.cleanData();
      await this.getData(event.target.value);
      const Validator = require('jsonschema').Validator;
      const v = new Validator();
      this.setState({schemaIsValid: v.validate(this.state.resume, schemaResume).valid});
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
          {this.state.schemaIsValid && <div>
            <Person person={ this.state.resume.person } resume={ this.state.resume.resume }/>
            <Contact contacts={ this.state.resume.contacts }/>
            <Social items={ this.state.resume.social }/>
            <Education entities={ this.state.resume.entities }/>
            <Languages items={ this.state.resume.languages }/>
            <Skils items={ this.state.resume.skils }/>
            <Experiences items={ this.state.resume.experiences }/>
            </div>}
          {this.state.resume && !this.state.schemaIsValid && <SchemaInvalid/>}
          {this.state.error && <Error message={this.state.error}/>}
      </div>
    );
  }
}

export default Curriculo;
