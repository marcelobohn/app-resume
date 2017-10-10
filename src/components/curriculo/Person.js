import React from 'react';

import { PageHeader, Panel, Row, Col } from 'react-bootstrap';

import TextField from './TextField';

export default function Person(props) {
  const { name, birthday, country, region } = props.person;
  const { title, sumary } = props.resume;
  return (
    <div>
      <PageHeader>{name} <small>{title}</small></PageHeader>

      <Panel bsStyle="primary">
        <Row>
          <Col md={6}>
            <TextField title="Localização" value={country + ' - ' + region}/>
          </Col>
          <Col md={6}>
            <TextField title="Nascimento" value={birthday}/>
          </Col>
        </Row><br />
        <b>Um pouco sobre mim:</b><br />
        {sumary}
      </Panel>
    </div>
  );
}