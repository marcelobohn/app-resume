import React from 'react';

import { Panel } from 'react-bootstrap';

import TextField from './TextField';

export default function Social(props) {
  const { social } = props;
  return (
    <div>
      <Panel header="Social">
        {social && social.map((item, index) => (
          <TextField key={index} title={item.service} value={item.address}/>
        ))}
      </Panel>
    </div>
  );
}