import React from 'react';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default function SchemaInvalid(props) {
  const { message } = props;
  return (
    <div>
    <ListGroup>
      <ListGroupItem header="Error" bsStyle="danger">Ocorreu um erro </ListGroupItem>
    </ListGroup>
    <pre>{message}</pre>
    </div>
  );
}
