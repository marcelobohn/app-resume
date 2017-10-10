import React from 'react';

import { Panel } from 'react-bootstrap';

import TextField from './TextField';

export default function Social(props) {
  const { items } = props;
  return (
    <div>
      <Panel collapsible defaultExpanded header="Social" bsStyle="primary">
        {items && items.map((item, index) => (
          <TextField key={index} title={item.service} value={item.address}/>
        ))}
      </Panel>
    </div>
  );
}