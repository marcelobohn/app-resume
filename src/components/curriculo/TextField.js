import React from 'react';

export default function TextField(props) {
  const { title, value } = props;
  return (
    <div>
      { value && <span><b>{title}:</b> {value}</span> }
    </div>
  );
}

