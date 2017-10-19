import React from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default function FormSearchResume(props) {
  const { execute } = props;
  return (
    <div>
      <FormGroup>
        <ControlLabel>URL do currículo</ControlLabel>
        <FormControl
          type="text"
          placeholder="digite o endereço"
          onKeyPress={execute}/>
      </FormGroup>
      <p>Informe a url do JSON com o currículo e aperte Enter</p>
    </div>
  );
}
