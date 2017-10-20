import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Icon } from 'react-fa'

import Body from './Body';
import SchemaInvalid from './SchemaInvalid';
import Error from './Error';
import About from './About';
import Schema from './Schema';
import Sample from './Sample';
import FormSearchResume from './FormSearchResume';

const schemaResume = require('../../schema');

class Curriculo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: '',
      schemaIsValid: false,
      error: '',
      showHeader: true,
      showSearchResume: true,
      showSchema: false,
      showSample: false,      
      showAbout: false
    };
  }

  cleanData() {
    this.setState({
      resume: '',
      schemaIsValid: false,
      error: '',
      showHeader: true,
      showSearchResume: false,
      showSchema: false,
      showSample: false,      
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

  showSearchResumeClick = () => {
    this.cleanData();
    this.setState({showSearchResume: true});
  }

  showSchemaClick = () => {
    this.cleanData();
    this.setState({showSchema: true});
  }

  showSampleClick = () => {
    this.cleanData();
    this.setState({showSample: true});
  }

  showAboutClick = () => {
    this.cleanData();
    this.setState({showAbout: true});
  }

  printClick = () => {
    this.setState({showHeader: false});
    setTimeout(() => {
      window.print();
      this.setState({showHeader: true});
    }, 500);
  }  
  
  render() {
    return (
      <div className="container">
        {this.state.showHeader && 
          <div>
            <h1>Resume JSON</h1>
            <ButtonToolbar className="App-title">
              <Button bsStyle="success" bsSize="small" onClick={this.showSearchResumeClick}><Icon name="file-text-o"/> Visualizador</Button>
              <Button bsStyle="primary" bsSize="small" onClick={this.showSchemaClick}><Icon name="code"/> Modelo</Button>
              <Button bsStyle="primary" bsSize="small" onClick={this.showSampleClick}><Icon name="code"/> Exemplo</Button>
              <Button bsStyle="primary" bsSize="small" onClick={this.showAboutClick}> Sobre</Button>
            </ButtonToolbar>
          </div>}
        {this.state.showSearchResume && <FormSearchResume execute={this.handleKeyPress}/>}
        {this.state.resume && <Body resume={ this.state.resume } print= { this.printClick }/>}
        {this.state.resume && !this.state.schemaIsValid && <SchemaInvalid/>}
        {this.state.error && <Error message={this.state.error}/>}
        {this.state.showSample && 
          <Sample url={"https://gist.githubusercontent.com/marcelobohn/d4a4e187d48bc562ebf616e1dbfa5776/raw"} 
            gist={"marcelobohn/d4a4e187d48bc562ebf616e1dbfa5776"} file={"sample-resume.json"} />}
        {this.state.showSchema && 
          <Schema url={"https://github.com/marcelobohn/app-resume/blob/master/src/schema.json"} schema={schemaResume}/>}     
        {this.state.showAbout && <About/>}
      </div>
    );
  }
}

export default Curriculo;
