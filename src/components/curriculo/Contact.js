import React from 'react';

import { Panel } from 'react-bootstrap';

import TextField from './TextField';

export default function Contact(props) {
  const { contacts } = props;
  return (
    <div>
      <Panel header="Contatos">
        {contacts && contacts.map((item, index) => (
          <TextField key={index} title={item.type} value={item.desc}/>
        ))}
      </Panel>
    </div>
  );
}