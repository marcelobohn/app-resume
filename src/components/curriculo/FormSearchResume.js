import React from 'react';

import { FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

export default function FormSearchResume(props) {
  const { execute } = props;
  return (
    <FormGroup>
      <ControlLabel>URL do arquivo</ControlLabel>
      <FormControl
        type="text"
        placeholder="digite o endereço"
        onKeyPress={execute}/>
    </FormGroup>
  );
}
