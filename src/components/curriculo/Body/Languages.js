import React from 'react';

import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function Languages(props) {
  const { items } = props;
  return (
    <div>
      <Panel collapsible defaultExpanded header="Idiomas" bsStyle="primary">
        <ListGroup fill>
        {items && items.map((item, index) => (          
          <ListGroupItem key={index}>
            <b>{item.name}</b> [ {item.abbreviation} ]<br />
            Nível: {item.level}
          </ListGroupItem>
        ))}
        </ListGroup>   
      </Panel>  
    </div>
  );
}