import React from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default function SchemaInvalid(props) {
  const { url, schema } = props;
  return (
    <FormGroup>
      <ControlLabel>Modelo utilizado na validação</ControlLabel>
      <FormControl type="text" defaultValue={url}/>
      <pre>{JSON.stringify(schema, undefined, 2)}</pre>
    </FormGroup>
  );
}
