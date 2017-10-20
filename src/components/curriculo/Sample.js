import React from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import EmbeddedGist from '../EmbeddedGist';

export default function SchemaInvalid(props) {
  const { url, gist, file } = props;
  return (
    <FormGroup>
      <ControlLabel>Currículo de exemplo</ControlLabel>
      <FormControl type="text" defaultValue={url}/>
      <EmbeddedGist gist={gist} file={file}></EmbeddedGist>
    </FormGroup>
  );
}
