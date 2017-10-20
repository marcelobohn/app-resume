import React from 'react';

import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function Contact(props) {
  const { entities } = props;
  return (
    <Panel collapsible defaultExpanded header="Educação / Formação" bsStyle="primary">
      <ListGroup fill>
      {entities && entities.map((item, index) => (          
        <ListGroupItem key={index}>
          <b>{item.course}</b> ({item.type}) <br />
          {item.school} - {item.finish}
        </ListGroupItem>
      ))}
      </ListGroup>   
    </Panel>  
  );
}