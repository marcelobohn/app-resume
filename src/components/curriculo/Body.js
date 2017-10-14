import React from 'react';

import Person from './Person';
import Contact from './Contact';
import Social from './Social';
import Education from './Education';
import Languages from './Languages';
import Skils from './Skils';
import Experiences from './Experiences';

export default function Body(props) {
  const { person, resume, contacts, social, entities, languages, skils, experiences } = props.resume;
  return (
    <div>
      { props.resume &&
        <div>
          <Person person={ person } resume={ resume }/>
          <Contact contacts={ contacts }/>
          <Social items={ social }/>
          <Education entities={ entities }/>
          <Languages items={ languages }/>
          <Skils items={ skils }/>
          <Experiences items={ experiences }/>
        </div>
      }
    </div>
  );
}
