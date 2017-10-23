import React from 'react';

import Person from './Person';
import Contact from './Contact';
import Social from './Social';
import Education from './Education';
import Languages from './Languages';
import Skils from './Skils';
import Experiences from './Experiences';

import { Button } from 'react-bootstrap';
import { Icon } from 'react-fa'

export default function Body(props) {
  const { person, resume, contacts, social, education, languages, skils, experiences } = props.resume;
  const { print } = props;

  return (
    <div>
      { props.resume &&
        <div className="bodyResume">
          <Person person={ person } resume={ resume }/>
          <Contact contacts={ contacts }/>
          <Social items={ social }/>
          <Education entities={ education }/>
          <Languages items={ languages }/>
          <Skils items={ skils }/>
          <Experiences items={ experiences }/>
          <Button bsStyle="primary" bsSize="small" onClick={print}><Icon name="print" /> Imprimir</Button>          
        </div>
      }
    </div>
  );
}
