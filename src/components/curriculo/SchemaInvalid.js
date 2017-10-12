import React from 'react';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default function SchemaInvalid() {
  return (
    <ListGroup>
      <ListGroupItem header="Schema Inválido" bsStyle="danger">A estrutura do currículo não está de acordo com o padrão</ListGroupItem>
    </ListGroup>
  );
}
