import React from 'react';

export default function DadosPessoais(props) {
  const { name, birthday, country, region } = props.data;
  return (
    <div>
      <h3>Dados Pessoais</h3>
      <div>Nome: {name || '--'}</div> 
      <div>Nascimento: {birthday || '--'}</div> 
      <div>Localização: {country + ' - ' + region || '--'}</div>       
    </div>
  );
}