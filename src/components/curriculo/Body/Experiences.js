import React from 'react';

import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function Experiences(props) {
  const { items } = props;
  return (
    <div>
      <Panel collapsible defaultExpanded header="Experiências" bsStyle="primary">
        <ListGroup fill>
        {items && items.map((item, index) => (          
          <ListGroupItem key={index}>
            <b>{item.company}</b><br />
            {item.position}<br />
            De {item.start} até {item.end || 'Emprego atual'}
          </ListGroupItem>
        ))}
        </ListGroup>   
      </Panel>  
    </div>
  );
}