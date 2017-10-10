import React from 'react';

import { PageHeader, Panel } from 'react-bootstrap';

import TextField from './TextField';

export default function Person(props) {
  const { name, birthday, country, region } = props.person;
  const { title, sumary } = props.resume;
  return (
    <div>
      <PageHeader>{name} <small>{title}</small></PageHeader>
      <TextField title="Localização" value={country + ' - ' + region}/>            
      <TextField title="Nascimento" value={birthday}/>
      <Panel>{sumary}</Panel>
    </div>
  );
}