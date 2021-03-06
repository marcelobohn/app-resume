import React from 'react';

import { Panel, Label } from 'react-bootstrap';

export default function Skils(props) {
  const { items } = props;
  return (
    <div>
      <Panel collapsible defaultExpanded header="Habilidades" bsStyle="primary">
        {items && items.map((item, index) => (
          <Label key={index} bsStyle="primary" className="skil">{item}</Label>
        ))}
      </Panel>
    </div>
  );
}