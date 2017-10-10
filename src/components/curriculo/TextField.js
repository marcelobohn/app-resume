import React from 'react';

export default function TextField(props) {
  const { title, value } = props;
  return (
    <div>
      { value && <span>{title}: {value}</span> }
    </div>
  );
}

