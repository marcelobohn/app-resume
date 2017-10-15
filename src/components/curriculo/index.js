import React, { Component } from 'react';
import Body from './Body';
import SchemaInvalid from './SchemaInvalid';
import Error from './Error';
import About from './About';
import FormSearchResume from './FormSearchResume';

import { Button, ButtonToolbar } from 'react-bootstrap';

const schemaResume = require('../../schema');

class Curriculo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: '',
      schemaIsValid: false,
      error: '',
      showResume: true,
      showSchema: false,
      showAbout: false
    };
  }

  cleanData() {
    this.setState({
      resume: '',
      schemaIsValid: false,
      error: '',
      showResume: false,
      showSchema: false,
      showAbout: false
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

  showResumeClick = () => {
    this.cleanData();
    this.setState({showResume: true});
  }

  showSchemaClick = () => {
    this.cleanData();
    this.setState({showSchema: true});
  }

  showAboutClick = () => {
    this.cleanData();
    this.setState({showAbout: true});
  }

  render() {
    return (
      <div className="container">
        <h1>Resume JSON</h1>
        <ButtonToolbar className="App-title">
          <Button bsStyle="primary" onClick={this.showResumeClick}>Visualizador</Button>
          <Button bsStyle="primary" onClick={this.showSchemaClick}>Modelo</Button>
          <Button bsStyle="primary" onClick={this.showAboutClick}>Sobre</Button>
        </ButtonToolbar>

        {this.state.showResume && <FormSearchResume execute={this.handleKeyPress}/>}
        {this.state.resume && <Body resume={ this.state.resume }/>}
        {this.state.resume && !this.state.schemaIsValid && <SchemaInvalid/>}
        {this.state.error && <Error message={this.state.error}/>}
        {this.state.showSchema && <pre>{JSON.stringify(schemaResume, undefined, 2)}</pre>}
        {this.state.showAbout && <About/>}
      </div>
    );
  }
}

export default Curriculo;
